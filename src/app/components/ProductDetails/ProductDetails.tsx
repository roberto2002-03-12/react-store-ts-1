import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/context';
import './style.css';

export const ProductDetails = () => {
  const { isProductDetailOpen, setIsProductDetailOpen, itemToShow } = useContext(ShoppingCartContext);

  return (
    <aside className={`product-detail ${isProductDetailOpen === true ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => setIsProductDetailOpen(false)} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
      <figure className='m-0 w-full h-60 px-6'>
        <img className='w-full h-full object-cover rounded-lg' src={itemToShow?.image} alt="Product image" />
      </figure>
      <div className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>S/. {itemToShow.price}</span>
        <span className='font-medium text-md'>{itemToShow.title}</span>
        <div className="overflow-y-auto max-h-[100px]">
          <span className='font-light text-sm'>{itemToShow.description}</span>
        </div>
      </div>
    </aside>
  )
}
