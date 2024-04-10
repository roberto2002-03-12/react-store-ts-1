import { IItemShop } from '../../../models'

export const MyOrderCard = ({ product } : { product: IItemShop }) => {
  return (
    <div className='flex justify-between items-center w-full mt-2 border-b-2 border-gray-300 pb-2'>
      <figure className='flex items-center gap-2 w-20 h-20'>
        <img loading='lazy' className='w-full h-full rounded-lg object-contain' src={product.image} alt={product.title} />
      </figure>
      <div className='flex flex-col w-56'>
        <p className='text-sm font-light mb-1'>{product.title}</p>
        <p className='text-sm font-light mb-2'>precio unidad S/. {product.price}</p>
        <div className='flex justify-between'>
          <p>{product.quantity} ud.</p>
          <p>S/. {product.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
