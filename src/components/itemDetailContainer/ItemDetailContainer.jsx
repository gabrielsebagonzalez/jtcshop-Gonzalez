import { useState, useEffect } from "react";
import { productos } from "../mock/productos";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItems] = useState ({})

    const traerItem = () => {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve(productos.find(obj => obj.id === 3))
            }, 1000)
            
        })
    }

    useEffect (() => {
        traerItem().then(respuesta => {
            setItems(respuesta)
        })
        
    }, [id])

    return (
       < ItemDetail item={item}/>       
    )

}
export default ItemDetailContainer




