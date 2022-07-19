import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='card'>
        <img src={item.img} alt="" className='card-image'/>
        <div>
          <h4>{item.nombre}</h4>
          <span>{`$`}{item.precio}</span>
        </div>

        <div>
          <Link to={`/item/${item.id}`}><button>Detalle</button></Link>
        </div>
    </div>

 
  )
}
export default Item