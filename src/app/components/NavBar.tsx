import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../context/context'

export const NavBar = () => {
  const activeStyle = 'underline underline-offset-4'
  const { count, setIsCheckOutSideMenu } = useContext(ShoppingCartContext);

  return (
    <nav className='bg-white flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {/* Store */}
        <li className='font-semibold text-lg'>
          <NavLink to={'/'}>
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink to={'/all'} className={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined }>
            All
          </NavLink>
        </li>

        <li>
          <NavLink to={`/women's clothing`} className={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined }>
            Women's clothing
          </NavLink>
        </li>

        <li>
          <NavLink to={`/men's clothing`} className={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined }>
            Men's clothing
          </NavLink>
        </li>

        <li>
          <NavLink to={'/jewelery'} className={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined }>
            Jewelery
          </NavLink>
        </li>

        <li>
          <NavLink to={'/electronics'} className={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined }>
            Electronics
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        {/* Account */}
        <li className='text-black/60'>
          roberto@email.com
        </li>
        <li>
          <NavLink to={'/my-orders'}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'} className={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to={'/sign-in'} className={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined }>
            Sign in
          </NavLink>
        </li>
        <li className='flex'>
          <svg onClick={() => setIsCheckOutSideMenu(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          {count}
        </li>
      </ul>
    </nav>
  )
}
