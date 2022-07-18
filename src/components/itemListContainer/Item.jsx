import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

const Item = ({item, id}) => {
  return (
    <div className='card'>
        <img src={item.img} alt="" className='card-image'/>
        <div>
          <h4>{item.nombre}</h4>
          <span>{`$`}{item.precio}</span>
        </div>

        <div>
          <Link to={`/item/${id}`}><button>Detalle</button></Link>
        </div>
    </div>

 
  )
}
export default Item