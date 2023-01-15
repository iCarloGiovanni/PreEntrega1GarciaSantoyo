import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

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
    console.log(params.id)
    const productID = params.id - 1;

    return ( 
        <div>
            { enEspera ? 'Cargando...' :
                <div className="productDetails">
                    <img src={productos[productID].image} alt={productos[productID].title}/>
                    <div className="productDescription">
                        <h2> {productos[productID].title} </h2>
                        <p> {productos[productID].description} </p>
                        <h3> ${productos[productID].price} </h3>
                        <span className="categoria"> {productos[productID].category} </span>
                        <button> Comprar</button>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default ItemDetailContainer;