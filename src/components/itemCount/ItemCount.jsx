import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, inicio, onAdd}) => {

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



  return (
    <div className='counter'>
        <div className='counter-btn'>
            <button onClick={restar}>-</button>
            <p>{contador}</p>
            <button onClick={sumar}>+</button>
        </div>

        <div>
            <button onClick={() => onAdd(contador)} className='agregar-btn'>Agregar al carrito</button>
        </div>

    </div>
  )
}
export default ItemCount
