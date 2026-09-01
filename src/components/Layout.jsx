import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'

function Layout() {
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    const location = useLocation()

    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setToken(savedToken)
        setLoading(false)
    }, [])

    if (loading) {
        return null
    }

    
    if (!token) {
        return <Navigate to="/login" replace state={{ from: location}}/>
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout 