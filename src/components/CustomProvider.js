import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({ children }) => {

    const cargarCarrito = () => {
        const pedido = JSON.parse(localStorage.getItem('pedido'))
        if(pedido){ return pedido
        }else{return []}
    }

    const[user, setUser] = useState({})
    const [carrito, setCarrito] = useState(cargarCarrito)
    const [totalProductos, setTotalProductos] = useState(0)
    let [precioTotal, setPrecioTotal] = useState(0)

    useEffect(() => {
        const cantidad = JSON.parse(localStorage.getItem('cantidad'));
        const pedido = JSON.parse(localStorage.getItem('pedido'));
        if(pedido){
            setCarrito(pedido)
        }
        if(cantidad){
            setTotalProductos(cantidad)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('pedido', JSON.stringify(carrito))
        localStorage.setItem('cantidad', totalProductos)
        calcularTotal(carrito)
    })

    // AGREGAR AL CARRITO
    const addProduct = (product, cantidad) => {

        const copiaCarrito = [...carrito];
        let estaEnCarrito = false

        if(carrito.length > 0){
            carrito.forEach( (prod) =>{
                if(prod.id === product.id){
                    estaEnCarrito = true;
                    prod.cantidad += cantidad
                }
            })
        }

        if(!estaEnCarrito){
            copiaCarrito.push(product)
            setCarrito(copiaCarrito)
            product.cantidad = cantidad;
        }
        calcularTotal(carrito)
    }

    // QUITAR DEL CARRITO
    const removeProduct = (id) => {

        const copiaCarrito = [...carrito];

        copiaCarrito.forEach( (prod, i) =>{
            if(prod.id === id){
                copiaCarrito.splice(i, 1)
                setTotalProductos(totalProductos - prod.cantidad)
                setCarrito(copiaCarrito)
                calcularTotal(carrito)
            }
        })
    }

    // VACIAR EL CARRITO
    const emptyCart = () => {
        setCarrito([])
        setTotalProductos(0)
        setPrecioTotal(0)
    }

    //CALCULAR TOTAL
    function calcularTotal(arr){
        setPrecioTotal(0)
        let total = 0
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i].cantidad * arr[i].price);
        }
        setPrecioTotal(total)
    }

    const valorDelContexto = {
        carrito : carrito,
        totalProductos : totalProductos,
        precioTotal: precioTotal,
        user: user,
        setCarrito: setCarrito,
        setTotalProductos: setTotalProductos,
        addProduct: addProduct,
        emptyCart: emptyCart,
        removeProduct: removeProduct,
        setUser: setUser
    }

    return (
        <Provider value = {valorDelContexto} >
            {children}
        </Provider>
      );
}
 
export default CustomProvider;