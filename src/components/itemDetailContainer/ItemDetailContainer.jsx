import { useState, useEffect } from "react";
import { productos }  from '../../mock/productos'
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState ({})
    const { id } = useParams();

    const traerItemId = () => {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve(productos.find(obj => obj.id === id))
            }, 1000)
            
        })
    }

    useEffect (() => {
        traerItemId().then(respuesta => {
            setItem(respuesta)
        })
        
    },[])

    return (
       < ItemDetail item={item}/>     
    )

}
export default ItemDetailContainer




