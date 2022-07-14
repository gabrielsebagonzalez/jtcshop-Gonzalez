
import './App.css';
import ItemCount from './components/itemCount/ItemCount';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Lista de Productos'/>
      <ItemCount stock={8} inicio={1}/>
    </div>
  );
}
      
export default App;



