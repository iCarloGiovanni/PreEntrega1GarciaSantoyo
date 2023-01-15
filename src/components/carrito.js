const Carrito = () => {

    const handleClick = (e) => {

        //e son todos los detalles del evento
        //e.target es el elemento original que dispara el evento (en este caso seria el boton)
        console.log(e)
        console.log(e.target)
    }

    const handleChange = (e) => {
        console.log(e)
    }

    return ( 
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Terminar Compra</button>
        </div> );
}
 
export default Carrito;