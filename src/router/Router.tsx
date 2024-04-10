import { Routes, Route } from 'react-router-dom';
import { 
  Home, MyAccount, MyOrder, MyOrders, 
  SignIn, NotFound 
} from '../app/pages';
import { NavBar, CheckOutSideMenu } from '../app/components'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:category' element={<Home />}/>
        <Route path='/my-account' element={<MyAccount />}/>
        <Route path='/my-order' element={<MyOrder />}/>
        <Route path='/my-orders' element={<MyOrders />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
      <NavBar />
      <CheckOutSideMenu />
    </>
  )
}
