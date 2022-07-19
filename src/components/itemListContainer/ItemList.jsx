import React from 'react'
import Item from './Item'
import {Link} from 'react-router-dom'

const ItemList = ({item}) => {
    return (

        <div className='card-contenedor'>
            { 
                item.map((item) => (
                   <Link to={`/detail/${item.id}`} className='link'><Item item={item} key={item.id}  /></Link>
                ))}  

        </div>
    )
}
export default ItemList





            
    


