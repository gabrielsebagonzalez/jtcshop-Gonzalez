import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'



const Cart = () => {

    const { cart, deleteOne, deleteAll, suma } = useContext(cartContext)

    if (cart.length === 0) {
        return <h3>No hay productos, volver al <Link to='/'>Home</Link></h3>
    }

  return (
    <div>
        {
            cart.map((prod) => (
                <div key={prod.id} style={{color:"white"}}>
                    <img src={prod.img} alt="" />
                    <div>
                        <h2>{prod.nombre}</h2>
                        <h2>Cantidad: {prod.cantidad}</h2>
                        <h2>${prod.precio}</h2>
                    </div>
                    <div>
                        <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                    </div>
                </div>

            ))
        }
        <div>
            <button onClick={deleteAll}>Eliminar Todos los productos</button>
        </div>
        <div>
            <h3>Total: ${suma}</h3>
        </div>
    </div>
  )

}

export default Cart