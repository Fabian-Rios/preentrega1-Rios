import './App.scss';
import BaseLayout from './layout/BaseLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Contactos from './pages/Contactos';
import Product from './pages/Product';



function App() {
return(
  <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/store' element={<Store />}/>
        <Route exact path='/contactos' element={<Contactos />}/>
        <Route exact path='/item/:id' element={<Product />}/>
      </Routes>
    </BaseLayout>
  </BrowserRouter>
)
}

export default App


