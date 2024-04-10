import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/context'
import { Layout } from '../../components';
import { OrderCard } from './components/OrderCard'

export const MyOrders = () => {
  const { ordersMade, setOrderSelected } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full max-w-screen-lg'>
        <div className='flex justify-between w-80 border-b-2 border-gray-400 pb-2'>
          <p>
            Orders
          </p>
          <p>
            { ordersMade.length }
          </p>
        </div>
        <div className='flex flex-col w-80'>
          {
            ordersMade.map(ord => <OrderCard order={ord} setOrderSelected={setOrderSelected} key={ord.id}/>)
          }
        </div>
      </div>
    </Layout>
  )
}
