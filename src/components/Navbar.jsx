import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem("token")
    navigate("/login", { replace: true })
  }

  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white shadow-md">
        <h2 className="text-xl font-bold tracking-wide">
            My App
        </h2>

        <button
          onClick={handleSignOut}
          className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >Sign Out</button>
    </header>
  )
}

export default Navbar