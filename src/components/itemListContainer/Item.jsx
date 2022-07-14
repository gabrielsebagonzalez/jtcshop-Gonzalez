import React from 'react'
import './item.css'

const Item = ({item}) => {
  return (
    <div className="container">
            <div className='card'>
            <img src={item.img}alt="" />
            <h4>{item.nombre}</h4>
            <p>{`$`}{item.precio}</p>
            <button>Agregar al carrito</button>

        </div>
    </div>
 
  )
}
export default Item