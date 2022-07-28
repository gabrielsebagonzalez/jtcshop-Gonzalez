import { createContext, useEffect, useState } from "react";


export const cartContext = createContext()

const Provider = (props) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log(cart);
    }, [cart])

    const addToCart = (item, contador) => {
        if (isInCart(item.id)) {
            console.log("Producto en carrito");
        } else {
            setCart([...cart, {...item, cantidad: contador}])
        }
    }

    const isInCart = (id) => {
        return(
            cart.some(prod => prod.id === id)
        )
    }



    return(
        <cartContext.Provider value={{cart, addToCart}}>{props.children}</cartContext.Provider>
    )
}
export default Provider