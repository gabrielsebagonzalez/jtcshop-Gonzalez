import React, { useEffect, useState } from 'react'
import { productos } from '../mock/productos'
import ItemList from './ItemList'

export const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const renderizarProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000)
    })
    renderizarProductos
      .then((datos) => {
        setItems(datos)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    <div>
        <h3>{greeting}</h3>
        <ItemList items={items} />
    </div>
  )
}
export default ItemListContainer
