import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../../components'
import { MyOrderCard } from './components/MyOrderCard'
import './index.css';

export const MyOrder = () => {
  const { orderSelected } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full max-w-screen-lg'>
        <div className='flex justify-start w-80 mb-2'>
          <svg onClick={() => navigate('/my-orders')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div className='pl-2 pr-2 flex justify-between items-center w-80'>
          <p>Total Products</p>
          <p>{orderSelected.totalProducts}</p>
        </div>
        <div className='pl-2 pr-2 pb-2 mt-1 mb-4 flex justify-between items-center w-80 border-gray-400 border-b-2'>
          <p>Total price</p>
          <p>S/. {orderSelected.totalPrice.toFixed(2)}</p>
        </div>
        <div className='my-order-items flex flex-col w-80 overflow-y-auto'>
          {
            orderSelected.products.map(prod => <MyOrderCard product={ prod } key={prod.id}/>)
          }
        </div>
      </div>
    </Layout>
  )
}
