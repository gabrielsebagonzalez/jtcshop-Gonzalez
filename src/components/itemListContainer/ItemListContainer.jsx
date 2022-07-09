import React from 'react'
import style from './Greeting.module.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className={style.styleGreeting}>
        <h3>{greeting}</h3>
    </div>
  )
}
export default ItemListContainer
