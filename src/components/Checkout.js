import { useState, useEffect } from "react";
import {useCarrito} from "./CustomProvider";
import CardContainer from "./CardContainer"

const Checkout = () => {

        const [enEspera, setenEspera] = useState(true)
        const [productos, setProductos] = useState([])
    
        const { user, precioTotal } = useCarrito()
    

    return ( 
        <>
            <h1>Confirmar pedido</h1>
            <p> Orden #1234567890</p>
            <h2> Desgolse de pedido: </h2>
            <CardContainer/>
            <div className="checkout">
                <p> Enviar a: {user.nombre}, a la direccion: {user.direccion}
                <br/> e-mail: {user.email}, Telefono: {user.telefono} </p>
                <h5> Total: ${precioTotal} </h5>
            </div>
            
            <button>Proceder al pago</button>
        </> 
    );
}
 
export default Checkout;