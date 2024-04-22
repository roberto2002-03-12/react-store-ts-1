import { Link } from 'react-router-dom'

export const NotFound = () => {

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-medium">Not found</h2>
      <Link to={'/'} className='text-sky-500 text-lg'>
      Go home
      </Link>
    </div>
  )
}
