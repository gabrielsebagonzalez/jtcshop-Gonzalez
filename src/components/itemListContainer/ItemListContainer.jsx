import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {

  const [item, setItem] = useState([]);
  const { categoria } = useParams();



    useEffect(() => {

      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'items')
      if(categoria) {
        const queryFilter = query(queryCollection, where('categoria', '==', categoria ))
        getDocs(queryFilter)
        .then(res => setItem(res.docs.map(product => ({id: product.id, ...product.data()}))));

      } else {
        getDocs(queryCollection)
        .then(res => setItem(res.docs.map(product => ({id: product.id, ...product.data()}))));
      }

  }, [categoria])

  return (
     <div>
      <h3>{greeting}</h3>
      <ItemList item={item} />
    </div>
  )
}
export default ItemListContainer
