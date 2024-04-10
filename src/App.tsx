import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router'
import { ShoppingCartProvider } from './app/context/context';

function App() {

  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App
