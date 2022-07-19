import React, { useEffect, useState } from 'react'
import { productos } from '../../mock/productos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {

  const [item, setItem] = useState([]);
  const { categoria } = useParams();

   useEffect(() => {
    const renderizarProductos = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve( categoria ? productos.filter(obj => obj.categoria === categoria) : productos);
      }, 1000)
    })
    renderizarProductos() 
      .then((datos) => {
        setItem(datos)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [categoria])

  return (
     <div>
      <h3>{greeting}</h3>
      <ItemList item={item} />
    </div>
  )
}
export default ItemListContainer
