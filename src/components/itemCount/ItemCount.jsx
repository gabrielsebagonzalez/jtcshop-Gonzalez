import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, inicio}) => {

    const [contador, setContador] = useState(inicio)

    const restar = () => {
        if (contador > inicio)
        setContador(contador - 1)
    }

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const agregarAlCarrito = () => {
        if (contador <= stock) {
            alert(`Se agregaron al carrito ${contador} productos`)
        }
    }

  return (
    <div className='counter'>
        <div className='counter-btn'>
            <button onClick={restar}>-</button>
            <p>{contador}</p>
            <button onClick={sumar}>+</button>
        </div>

        <div>
            <button onClick={agregarAlCarrito} className='agregar-btn'>Agregar al carrito</button>
        </div>

    </div>
  )
}
export default ItemCount
