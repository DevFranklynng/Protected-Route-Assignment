import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
    const [token, setToken] = useState(null)

    const checkLoginStatus = () => {
        const savedToken = localStorage.getItem("token")
        setToken(savedToken)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        checkLoginStatus()
    }, [])

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout 