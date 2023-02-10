import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ( ) => {

    const [enEspera, setenEspera] = useState(true)
    const [productos, setProductos] = useState([])

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

    const params = useParams()
    //con esto se obtiene el ID del producto. Params es para usar los parametros del link donde estamos
    const productID = params.id - 1;

    return ( 
        <div>
            { enEspera ? 'Cargando...' :
            <ItemDetail productID = {productID} productos = {productos}/>
            }
        </div>
    );
}
 
export default ItemDetailContainer;