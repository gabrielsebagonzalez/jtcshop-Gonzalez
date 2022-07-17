import React from 'react'
import './item.css'

const Item = ({item}) => {
  return (
    <div className='card'>
        <img src={item.img} alt="" className='card-image'/>
        <div>
          <h4>{item.nombre}</h4>
          <span>{`$`}{item.precio}</span>
        </div>

        <div>
          <button>Detalle</button>
        </div>
    </div>






   /*  <div className="container">
            <div className='card'>
            <img src={item.img}alt="" />
            <h4>{item.nombre}</h4>
            <p>{`$`}{item.precio}</p>
            <button>Agregar al carrito</button>

        </div>
    </div> */
 
  )
}
export default Item