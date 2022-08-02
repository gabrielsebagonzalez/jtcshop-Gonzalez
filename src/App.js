
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Provider from './context/cartContext';
import Cart from './components/cart/Cart';


function App () {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting='Lista de Productos'/>} />                                            
          <Route path='/categorias/:categoria' element={ <ItemListContainer />} />                                            
          <Route path='/item/:id' element={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>                                            
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


      
      


