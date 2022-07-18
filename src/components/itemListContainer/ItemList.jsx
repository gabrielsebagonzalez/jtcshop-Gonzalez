import React from 'react'
import Item from './Item'
import {Link} from 'react-router-dom'

const ItemList = ({items}) => {
    return (

        <div className='card-contenedor'>
            { 
                items.map((item) => (
                   <Link to={`/detail/${item.id}`}><Item item={item} key={item.id} /></Link>
                ))}  

        </div>
    )
}
export default ItemList





            
    


