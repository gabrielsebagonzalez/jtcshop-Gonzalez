import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import carrito from '../assets/img/carrito.png'


const CartWidget = () => {
  const {cart} = useContext(cartContext)
  return (
      <div>
        <img className='logo-carrito' src={carrito} alt="imagen de carrito"/><span className='numeral'>{cart.length}</span>
      </div>

    

  )
}
export default CartWidget
