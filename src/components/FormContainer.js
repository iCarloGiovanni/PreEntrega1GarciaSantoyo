import { useState } from "react"
import { useCarrito } from "./CustomProvider"
import Form from "./Form"

const FormContainer = () => {

    const { emptyCart, carrito, precioTotal, setUser } = useCarrito()

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")

    const handleClick = (e) => {

        const usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            direccion: direccion
        }

        setUser(usuario)
    }

    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value)
    }

    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value)
    }

    const handleVaciar = () => {
        emptyCart()
    }

    if(carrito.length > 0){
        return (
            <>
            <h1>Terminar Pedido</h1> 
                <Form
                handleChangeEmail={handleChangeEmail}
                handleChangeName={handleChangeName}
                handleChangeTelefono={handleChangeTelefono}
                handleChangeDireccion={handleChangeDireccion}
                handleClick={handleClick}
                handleVaciar={handleVaciar}
                precioTotal={precioTotal}/>
            </>
         );
    }else{
        return(
            <h1>{`Tu carrito está vacío :(`}</h1>
        )
    }
    
}
 
export default FormContainer;