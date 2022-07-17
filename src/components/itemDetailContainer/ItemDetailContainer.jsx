import { useState, useEffect } from "react";
import { productos } from "../mock/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItems] = useState ({})

    const traerItem = () => {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve(productos.find(obj => obj.id === 3))
            }, 2000)
            
        })
    }

    useEffect (() => {
        traerItem().then(respuesta => {
            setItems(respuesta)
        })
        
    }, [])

    return (
        < ItemDetail item={item}/>        
    )

}
export default ItemDetailContainer




