import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

function Card(props){

    const {removeProduct } = useCarrito()

    const producto = props.producto

    const quitar = (id) => {
        removeProduct(producto.id)
    }

    return (
        <article id="card" className="card">
            <Link to={`/item/${producto.id}`}>
                <img src={producto.image}></img>
            </Link>
            <div className="card__Description">
                <h2>{producto.title}</h2>
                <p> Cantidad: {producto.cantidad}  -  ${producto.price} </p>
                <p className="prodDesc">{producto.description}</p>
            </div>
            <div className="card__Details">
                <h3>${producto.price * producto.cantidad}</h3>
                <button onClick={quitar}> Quitar </button>
            </div>
        </article>
    )
}

export default Card;