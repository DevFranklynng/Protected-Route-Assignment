import { useNavigate } from "react-router-dom"

function Profile() {

  const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Profile
        </h1>

        <p className="mt-2 text-slate-600">
          This is your private profile page.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Back to Dashboard
        </button>
      </div>
    </main>
  )
}

export default Profile