import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className='flex gap-10 h-screen items-center justify-center'>
      <button
        onClick={() => {
          navigate('/signup')
        }}
        className='border px-10 py-2 bg-slate-500 text-white hover:bg-slate-700'
      >
        Sign up
      </button>
      <button
        onClick={() => {
          navigate('/signin')
        }}
        className='border px-10 py-2 bg-blue-500 text-white hover:bg-blue-700'
      >
        Sign in
      </button>
    </div>
  )
}
