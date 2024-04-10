import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/context'
import { OrderCart } from '../OrderCart/OrderCart'
import { useNavigate } from 'react-router-dom';
import './style.css';

export const CheckOutSideMenu = () => {
  const { isCheckOutSideMenu, setIsCheckOutSideMenu, cartItems, totalPrice, addOrder } = useContext(ShoppingCartContext)
  const navigate = useNavigate();

  const handleCheckOut = () => {
    const orderToAdd = {
      id: 0,
      products: cartItems,
      date: new Date(),
      totalPrice,
      totalProducts: cartItems.length
    }
    addOrder(orderToAdd);
    navigate('/my-order')
  }

  return (
    <aside className={`checkout-side-menu ${isCheckOutSideMenu === true ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center pl-6 pr-6 pt-6 pb-4'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => setIsCheckOutSideMenu(false)} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
      <div className='flex justify-between items-center pl-6 pr-6 pb-6'>
        <p>Total: </p>
        <p>S/. {totalPrice.toFixed(2)}</p>
      </div>
      <div className='px-6 overflow-y-scroll max-h-[400px] h-[400px]'>
        {
          cartItems.map(prod => <OrderCart product={ prod } key={ prod.id }/>)
        }
      </div>
      <div className='w-full flex items-center justify-center p-6'>
        <button onClick={handleCheckOut} className='border-2 bg-black pl-2 pr-2 text-white text-xl hover:bg-stone-800'>
          Checkout
        </button>
      </div>
    </aside>
  )
}
