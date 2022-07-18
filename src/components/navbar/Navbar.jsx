import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/' className='nav-logo'>JTC Shop</Link >
        <div className='nav-items'>
            <NavLink to='/' className={({isActive}) => isActive? 'link-activo' : 'nav-items a' }>Home</NavLink>
            <NavLink to='/detail/:id'className={({isActive}) => isActive? 'link-activo' : 'nav-items a' }>Categoría</NavLink>
        </div>
        <CartWidget/>
    </div>
    )
}
export default Navbar



