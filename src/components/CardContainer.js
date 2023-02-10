import Card from "./Card";
import { useState, useEffect } from "react";
import { useCarrito } from "./CustomProvider";

const CardContainer = () => {

    const [enEspera, setenEspera] = useState(true)
    const [productos, setProductos] = useState([])

    const { carrito } = useCarrito()

    useEffect(()=>{

        const pedido = fetch("https://fakestoreapi.com/products")

        pedido
            .then((respuesta)=>{
                const productos = respuesta.json()
                return productos
            })

            .then((productos)=>{
                setProductos(productos)
                setenEspera(false)
            })

            .catch((error)=>{
                console.log(error)
            })

    },[])

    return (
        <div>
            { enEspera ? 'Cargando...' :
            <div>
            {carrito.map((producto)=>{
                return(
                    <Card producto={producto} key={producto.id}/>
                )
            })}
            </div>}
        </div>
     );
}
 
export default CardContainer;