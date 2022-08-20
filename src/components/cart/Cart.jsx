import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import './cart.css'



const Cart = () => {

    const { cart, deleteOne, deleteAll, suma } = useContext(cartContext)

    const createOrder = async (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orderCollectionQuery = collection(db, 'orders');
        const order = {
            buyer: {name: 'Tomas' , phone: '1212334455', email: 'test@gmail.com'},
            items: cart.map((product) => ({
                name: product.nombre,
                price: product.precio,
            })),
            total: cart.reduce((acc, product) => acc + product.precio * product.cantidad, 0 ),
        };
        await addDoc(orderCollectionQuery, order)
        .then((response) => {
            console.log(response.id);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    if (cart.length === 0) {
        return <h3>No hay productos, volver al <Link to='/'>Home</Link></h3>
    }

  return (
    <div className="cart-container">
        {
            cart.map((prod) => (
                <div key={prod.id} style={{color:"white"}} className="cart-item">
                    <img src={prod.img} alt="" />
                    <div>
                        <h2>Articulo: {prod.nombre}</h2>
                        <h2>Cantidad: {prod.cantidad}</h2>
                        <h2>Precio: ${prod.precio}</h2>
                    </div>
                    <div>
                        <button onClick={() => deleteOne(prod.id)} className='btn-eliminar'>Eliminar</button>
                    </div>
                </div>

            ))
        }
        <div className='btn-container'>
            <button onClick={deleteAll} >Eliminar Todos los productos</button>
        </div>
        <div>
            <h3>Total: ${suma}</h3>
        </div>
        <div className="btn-order">
            <button onClick={createOrder}>Crear Orden</button>
        </div>
    </div>
  )

}

export default Cart