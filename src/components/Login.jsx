import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("token", "my-token")
    navigate("/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold">Login</h1>

        <button
          onClick={handleLogin}
          className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Sign In          
        </button>
      </div>
    </div>
  )
}

export default Login