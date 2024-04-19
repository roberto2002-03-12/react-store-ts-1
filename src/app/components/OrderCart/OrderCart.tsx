import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/context'
import { IItemShop } from '../../models'

export const OrderCart = ({ product }: { product: IItemShop }) => {
  const { addItemToCart, removeItemFromCart, minusOneQuantityFromCart } = useContext(ShoppingCartContext)

  return (
    <div className='flex justify-between items-center mt-2 mb-2 border-b-2 border-gray-300 pb-2'>
      <figure className='flex items-center gap-2 w-20 h-20'>
        <img className='w-full h-full rounded-lg object-contain' src={product.image} alt={product.title} />
      </figure>
      <div className='flex flex-col items-center gap-2 w-3/4 ml-1'>
        <p className='text-sm font-light'>{product.title}</p>
        <div className='flex justify-between w-full pl-2 pr-2'>
          <p className='text-sm font-light'>1 ud. S/. {product.price}</p>
          <button 
            className='border-2 border-gray-300 rounded-2xl text-sm font-light pl-2 pr-2'
            onClick={ () => removeItemFromCart(product) }
          >
            remover
          </button>
        </div>
        <div className='flex w-full justify-between'>
          <p className='text-lg font-medium'>S/. {product.totalPrice.toFixed(2)} </p>
          <div className='flex items-center'>
            <svg onClick={() => addItemToCart(product)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className='text-sm font-light mr-1 ml-1 mt-0.5'>{product.quantity} ud. </p>
            <svg onClick={() => minusOneQuantityFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
