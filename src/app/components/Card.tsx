import { useContext } from 'react'
import { ShoppingCartContext } from '../context/context';
import { truncateString } from '../helpers/stringHelper'
import { IItemShop } from '../models'

export const Card = ({ item } : { item: IItemShop }) => {
  const { 
    setCount, 
    count, 
    setIsProductDetailOpen, 
    setItemToShow,
    addItemToCart,
    setIsCheckOutSideMenu,
    cartItems
  } = useContext(ShoppingCartContext);

  const showProduct = (itemToSet: IItemShop) => {
    setIsProductDetailOpen(true);
    setItemToShow(itemToSet);
  }

  const addNewItem = (itemToAdd: IItemShop) => {
    setCount(count + 1)
    addItemToCart(itemToAdd);
    setIsCheckOutSideMenu(true);
  }

  const isItemOnCard = (id: number) => {
    const conditional = cartItems.some(val => val.id === id);

    if (conditional === true) return true;
    return false;
  }

  return (
    <div className='bg-white w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-3/4'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ item?.category }</span>
        <span 
          className='absolute cursor-pointer bottom-0 right-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'
          onClick={() => showProduct(item)}
        >Details</span>
        <img className='w-full h-full object-cover rounded-lg' src={item?.image} alt="Product image" />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          {
            isItemOnCard(item.id) === false ?
            (
              <svg onClick={() => addNewItem(item)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            )
          }
        </div>
      </figure>
      <div className='flex flex-col justify-around items-start'>
        <span className='bg-stone-300/40 rounded-lg text-sm font-light ml-2 pl-3 pr-3'>{ truncateString((item?.title) ?? '', 25) }</span>
        <div className='ml-2 mt-1.5 bg-stone-300/40 rounded-lg pl-3 pr-3 flex justify-evenly items-center'>
          <span className='text-sm font-light mr-0.5'>price: </span>
          <span className='text-sm font-medium'>S/. { item?.price }</span>
        </div>
      </div>
    </div>
  )
}