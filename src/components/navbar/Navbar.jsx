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
            <NavLink to='/categorias/perifericos'className={({isActive}) => isActive? 'link-activo' : 'nav-items a' }>Perifericos</NavLink>
            <NavLink to='/categorias/computadoras'className={({isActive}) => isActive? 'link-activo' : 'nav-items a' }>Computadoras</NavLink>
            <NavLink to='/categorias/tablet'className={({isActive}) => isActive? 'link-activo' : 'nav-items a' }>Tablets</NavLink>
        </div>
        <CartWidget/>
    </div>
    )
}
export default Navbar



