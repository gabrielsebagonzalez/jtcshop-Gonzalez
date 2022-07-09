import React from 'react'
import carrito from '../assets/img/carrito.png'


export const CartWidget = () => {
  return (
    <div>
        <img className='logo-carrito' src={carrito} alt="imagen de carrito" />
    </div>
  )
}
export default CartWidget

