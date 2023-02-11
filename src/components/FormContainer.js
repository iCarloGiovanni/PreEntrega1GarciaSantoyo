import { useState } from "react"
import { useCarrito } from "./CustomProvider"
import Form from "./Form"

const FormContainer = () => {

    const { emptyCart, carrito, precioTotal, setUser } = useCarrito()

    const [nombre, setNombre] = useState("Nombre Apellido")
    const [email, setEmail] = useState("usario@mail.com")
    const [telefono, setTelefono] = useState("0192837465")
    const [direccion, setDireccion] = useState("Calle St #3312, col. colonia, CP: 10100")

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