import { Link } from "react-router-dom";

const Form = ({handleChangeEmail, handleChangeName, handleChangeTelefono,
                handleChangeDireccion, handleClick, handleVaciar, precioTotal}) => {
    return ( 
        <div className="formulario">
                <form>
                    <label> Nombre: </label>
                    <input name="nombre" type="text" onChange={handleChangeName} placeholder="  Nombre" />
                    <label> e-mail: </label>
                    <input id="email" type="text" onChange={handleChangeEmail} placeholder="  Email" />
                    <label> Direccion: </label>
                    <input id="direccion" type="direccion" onChange={handleChangeDireccion} placeholder="  Calle, numero y codigo postal" />
                    <label> Telefono: </label>
                    <input id="telefono" type="text" onChange={handleChangeTelefono} placeholder="  Telefono" />
                </form>
                <div className="totalPedido">
                    <h2> Total del pedido:</h2>
                    <h3> ${precioTotal}</h3>
                    <div>
                        <button onClick={handleVaciar}> Vaciar Carrito </button>
                        <Link to="/checkout">
                        <button onClick={handleClick}>Terminar Compra</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
    );
}
 
export default Form;