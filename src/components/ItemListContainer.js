import { useEffect, useState } from "react";

const ItemListContainer = (props) => {

    const [enEspera, setenEspera] = useState(true)
    const [productos, setProductos] = useState([{id: 1, nombre: "Playera", precio: 200}])

    useEffect(()=>{

        console.log("Pidiendo algo a la base de datos")

        setTimeout(()=>{

            console.log("Termino la solicitud a la base de datos")

            const copiaProductos = productos.slice(0)

            const newProductos = [
                {id: 2, nombre: "Sudadera", precio: 400},
                {id: 3, nombre: "Sueter", precio: 300},
                {id: 4, nombre: "Taza", precio: 100},
                {id: 5, nombre: "Gorra", precio: 150}
            ]

            newProductos.forEach(prod=>{
                copiaProductos.push(prod)
            })

            setProductos(copiaProductos)
            setenEspera(false)

        }, 5000)
    },[])

    return(
        <div>
            {enEspera ? "Espere 5 segundos..." : "Listo!"}
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