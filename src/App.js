
import './App.css';

import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting='Lista de Productos'/>
      <ItemDetailContainer />
      
    </div>
  );
}
      
export default App;


