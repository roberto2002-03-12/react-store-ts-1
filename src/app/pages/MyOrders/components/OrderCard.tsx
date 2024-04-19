import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../../helpers/dateFormatHelper'
import { IOrder } from '../../../models'

export const OrderCard = ({ order, setOrderSelected } : { order: IOrder; setOrderSelected: (order: IOrder) => void; }) => {
  const navigate = useNavigate();

  return (
    <div className='p-2 m-2 border-2 border-stone-500 rounded-lg'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-md font-semibold'>{formatDate(order.date)}</p>
        <svg onClick={() => {
          setOrderSelected(order);
          navigate('/my-order');
        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div className='mt-2 w-full flex justify-between items-center'>
        <p className='text-md font-semibold'>Total: S/. {order.totalPrice.toFixed(2)}</p>
        <p className='text-sm font-light'>Products ud. {order.totalProducts}</p>
      </div>
    </div>
  )
}
