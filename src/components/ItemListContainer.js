import { useEffect, useState } from "react";
//import { db } from "../firebase"
import { collection, query } from "firebase/firestore"
import { toast } from "react-toastify";
//productos es el nombre de la coleccion que hay en mi base, a la que quiero ingresar

const ItemListContainer = (props) => {

    const [enEspera, setenEspera] = useState(true)
    const [productos, setProductos] = useState([{id: 1, nombre: "Playera", precio: 200}])

    useEffect(()=>{

        toast.info("cargando productos...")

        //const productosCollection = collection(db, "productos") //CollectionReference/Query
        const referencia = doc(productosCollection, "ponerAquiMiId")
        const pedido = getDoc(referencia)
        console.log("Pidiendo algo a la base de datos") //quitar console logs

        //getDocs(Query)
        //query(Query, Constraint)
        //where(propiedad, operador, valor)

        const filtro = query(productosCollection, where("category","==","clothing"))
        const pedidoFirestore = getDocs(filtro)

        //aqui me quede, el pedido.then sera diferente

        pedidoFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProductos(productos)
                setenEspera(false)
                toast.dismiss()
                toast.success("productos cargados!")
            })
            .catch((error)=> {
                toast.error("Hubo un error, vuelve a intentarlo" + error.message)
            })

        // setTimeout(()=>{

        //     console.log("Termino la solicitud a la base de datos")

        //     const copiaProductos = productos.slice(0)

        //     const newProductos = [
        //         {id: 2, nombre: "Sudadera", precio: 400},
        //         {id: 3, nombre: "Sueter", precio: 300},
        //         {id: 4, nombre: "Taza", precio: 100},
        //         {id: 5, nombre: "Gorra", precio: 150}
        //     ]

        //     newProductos.forEach(prod=>{
        //         copiaProductos.push(prod)
        //     })

        //     setProductos(copiaProductos)
        //     setenEspera(false)

        // }, 5000)
    },[])

    return(
        <div>
            {/* {enEspera ? "Espere 5 segundos..." : "Listo!"} */}
            {enEspera ? "Cargando..." : null}
        </div>
    )
}

//     const [contador, setContador] = useState(0);
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState("");

//     useEffect(()=>{
//         console.log("useEffect");
//     })

//     const handleClick = () => {
//         setContador(contador + 1);
//     }

//     const handleOnChange = (e) => {
//         setSearchText(e.target.value);

//     }

//     const handleToggleDrawer = () => {
//         setOpen(!open);
//     }

//         return(
//             <div>
//                 {props.greeting}
//                 <p>Contador: {contador}</p>
//                 <p>Texto a buscar: {searchText}</p>
//                 <p>Drawer Open: {open ? "Abierto" : "Cerrado"}</p>
//                 <button onClick={handleClick}>Sumar</button>
//                 <button onClick={handleToggleDrawer}>Toggle Drawer</button>
//                 <input onChange={handleOnChange} type ="text" />
//             </div>
//         )
// }

export default ItemListContainer;