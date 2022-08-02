import { createContext, useEffect, useState } from "react";


export const cartContext = createContext()

const Provider = (props) => {

    const [cart, setCart] = useState([])
    const [suma, setSuma] = useState(0)

    const totalCart = () => {
        let suma = 0
        cart.forEach(item => suma += (item.precio * item.cantidad))
        setSuma(suma)
    }

    useEffect(() => {
        console.log(cart);
        totalCart()
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

    const deleteOne = (id) => {

        const productosFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(productosFiltrados);
    }

    const deleteAll = () => {
        
        setCart([])
    }




    return(
        <cartContext.Provider value={{cart, addToCart, deleteOne, deleteAll, suma}}>{props.children}</cartContext.Provider>
    )
}
export default Provider