import { Link } from 'react-router-dom'

export const NotLogged = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h2 className='text-5xl font-medium'>Not logged</h2>
      <p className='text-2xl font-light pt-2'>Please go to the <Link className='text-blue-400 font-medium' to={'/sign-in'}>login page</Link></p>
    </div>
  )
}
