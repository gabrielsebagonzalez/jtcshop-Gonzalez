import './ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'

const ItemDetail = ({item}) => {

    const [contador, setContador] = useState(0)
    const { addToCart} = useContext(cartContext)

    
    const onAdd = (contador) => {
        setContador(contador);
        addToCart(item, contador)
    }

    return (

        <div className="itemDetail">
            <div className="img-detail-cont">
                <img src={item.img} alt={item.nombre} className='img-detail'/>
            </div>
            <div className="text-container">
                <div className="titulo-container">
                    <h1>{item.nombre}</h1>
                    <h3>${item.precio}</h3>
                </div>
                <p>
                    {item.descripcion}
                </p>
                <p>Stock Disponible {(item.stock - contador)}</p>
                {contador === 0
                ? <ItemCount stock={item.stock} inicio={1} onAdd={onAdd}/>
                : (<Link to='/cart'>Ir al carrito</Link>
                )}
            </div>
        </div>
    )
}

export default ItemDetail





