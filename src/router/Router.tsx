import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartContext } from '../app/context/context'
import {
  Home, MyAccount, MyOrder, MyOrders,
  SignIn, NotFound, NotLogged
} from '../app/pages';
import { NavBar, CheckOutSideMenu } from '../app/components'
import { TypeAuthState } from '../app/models';

export const Router = () => {
  const { setAuth } = useContext(ShoppingCartContext);
  const authStored: TypeAuthState = localStorage.getItem('authStatus') as TypeAuthState || 'not-authenticated';

  useEffect(() => {
    setAuth(authStored);
  }, []);

  return (
    <>
      <Routes>
        {
          authStored === 'authenticated' ? (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/:category' element={<Home />} />
              <Route path='/my-account' element={<MyAccount />} />
              <Route path='/my-order' element={<MyOrder />} />
              <Route path='/my-orders' element={<MyOrders />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/*' element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path='/' element={<SignIn />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/*' element={<NotLogged />} />
            </>
          )
        }
      </Routes>
      {
        authStored === "authenticated" ? (
          <>
            <NavBar />
            <CheckOutSideMenu />
          </>

        ) : (
          <></>
        )
      }
    </>
  )
}
