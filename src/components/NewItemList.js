import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const  NewItemList = () => {

    const [enEspera, setenEspera] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{

        const pedido = fetch("https://fakestoreapi.com/products")

        pedido
            .then((respuesta)=>{

                //habiendo pasado las validaciones de estado y de headers
                //si tengo una variable que vale promesa adentro de un .then, le hago retorno
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
        <>
            { enEspera ? 'Cargando...' : <ItemList productos={productos}/>}
            
        </>
    )
}
 
export default  NewItemList;