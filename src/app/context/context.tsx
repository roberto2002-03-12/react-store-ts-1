import React, { createContext, ReactNode, useState } from 'react'
import { IItemShop, IOrder } from '../models';

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  setIsProductDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
  itemToShow: IItemShop;
  setItemToShow: React.Dispatch<React.SetStateAction<IItemShop>>;
  cartItems: IItemShop[];
  setCartItems: React.Dispatch<React.SetStateAction<IItemShop[]>>;
  addItemToCart: (item: IItemShop) => void;
  minusOneQuantityFromCart: (id: number) => void;
  removeItemFromCart: (object: IItemShop) => void;
  totalPrice: number;
  isCheckOutSideMenu: boolean;
  setIsCheckOutSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
  // orders
  ordersMade: IOrder[];
  addOrder: (order: IOrder) => void;
  removeOrder: (id: number) => void;
  orderSelected: IOrder;
  setOrderSelected: React.Dispatch<React.SetStateAction<IOrder>>;

}

const initProduct: IItemShop = {
  id: 0,
  title: '',
  price: 0,
  category: '',
  description: '',
  image: '',
  quantity: 0,
  totalPrice: 0
}

const initOrder: IOrder = {
  id: 0,
  products: [],
  date: new Date(),
  totalPrice: 0,
  totalProducts: 0
}

const initContext: ShoppingCartContext = {
  count: 0, 
  setCount: () => {},
  isProductDetailOpen: false,
  setIsProductDetailOpen: () => {},
  itemToShow: initProduct,
  setItemToShow: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  minusOneQuantityFromCart: () => {},
  removeItemFromCart: () => {},
  isCheckOutSideMenu: false,
  setIsCheckOutSideMenu: () => {},
  totalPrice: 0,
  ordersMade: [],
  addOrder: () => {},
  removeOrder: () => {},
  orderSelected: initOrder,
  setOrderSelected: () => {}
}

export const ShoppingCartContext = createContext<ShoppingCartContext>(initContext);

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  // product to show state
  const [itemToShow, setItemToShow] = useState<IItemShop>(initProduct);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // cart states
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState<IItemShop[]>([]);
  const [isCheckOutSideMenu, setIsCheckOutSideMenu] = useState(false);
  // orders made
  const [ordersMade, setOrdersMade] = useState<IOrder[]>([]);
  const [orderSelected, setOrderSelected] = useState<IOrder>(initOrder);

  const addItemToCart = (item: IItemShop) => {
    const index = cartItems.findIndex(prod => prod.id === item.id);

    if (index === -1) {
      setCartItems(prev => [...prev, {
        ...item,
        quantity: 1,
        totalPrice: item.price
      }]);
    } else {
      const copyCart = cartItems;
      const newValue: IItemShop = {
        ...copyCart[index],
        quantity: copyCart[index].quantity + 1,
        totalPrice: (copyCart[index].totalPrice + copyCart[index].price)
      };
      copyCart[index] = newValue;
      setCartItems([...copyCart]);
      setCount(prev => prev + 1);
    }

    setTotalPrice(prev => prev + item.price);
  };

  const removeItemFromCart = (object: IItemShop) => {
    const newCart = cartItems.filter(prod => prod.id !== object.id);
    setCartItems(newCart);
    setCount(prev => prev - object.quantity);
    setTotalPrice(prev => prev - object.totalPrice);
  }

  const minusOneQuantityFromCart = (id: number) => {
    const index = cartItems.findIndex(prod => prod.id === id);
    if (index !== -1 && cartItems[index].quantity !== 1) {
      const copyCart = cartItems;
      copyCart[index] = {
        ...copyCart[index],
        totalPrice: copyCart[index].totalPrice - copyCart[index].price,
        quantity: copyCart[index].quantity - 1
      };
      setCartItems([...copyCart]);
      setCount(prev => prev - 1);
      setTotalPrice(prev => prev - copyCart[index].price);
    }
  };

  // orders
  const addOrder = (order: IOrder) => {
    const newOrderToAdd: IOrder = {
      ...order,
      id: ordersMade.length + 1,
    }
    setCount(0);
    setTotalPrice(0);
    setCartItems([]);
    setIsCheckOutSideMenu(false);
    setOrdersMade(prev => [...prev, { ...newOrderToAdd }])
    setOrderSelected(order);
  };

  const removeOrder = (id: number) => {
    const newOrders = ordersMade.filter(prod => prod.id === id);
    setOrdersMade(newOrders);
  }

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      setIsProductDetailOpen,
      itemToShow,
      setItemToShow,
      cartItems,
      setCartItems,
      addItemToCart,
      minusOneQuantityFromCart,
      removeItemFromCart,
      totalPrice,
      isCheckOutSideMenu,
      setIsCheckOutSideMenu,
      ordersMade,
      addOrder,
      removeOrder,
      orderSelected,
      setOrderSelected      
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
};