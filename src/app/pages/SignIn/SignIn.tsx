import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/context'
import { Layout } from '../../components'

export const SignIn = () => {
  const { changeAuthStatus, auth } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='w-72 h-60 border-stone-500 border-2 rounded-lg flex flex-col justify-around items-center'>
        <div className='flex flex-col w-auto'>
          <label htmlFor="email" className='font-light'>Email</label>
          <input
            id='email'
            type="text" 
            value='robertocg21dev@gmail.com'
            className='rounded-lg border-stone-400 border-2 p-2'
            disabled
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email" className='font-light'>Password</label>
          <input
            id='email'
            type="password" 
            value='*********' 
            className='rounded-lg border-stone-400 border-2 p-2'
            disabled
          />
        </div>
        <button
          className='bg-black py-1 hover:bg-white hover:text-black hover:border-black hover:border-2 border-2 border-black pr-4 pl-4 rounded-2xl text-white'
          onClick={changeAuthStatus}
        >
          {
            auth === 'authenticated' ? <span>Logout</span> : <span>Login</span>
          }
        </button>
      </div>
    </Layout>
  )
}
