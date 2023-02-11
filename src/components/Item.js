import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return ( 
        <div className="myCard">
            <article key={producto.id}>
                <h4>{producto.title}</h4>
                <img src={producto.image} alt="{producto.title}" />
                <p>Precio unitario: ${producto.price}</p>
                <Link to={`/item/${producto.id}`}>ver detalles...</Link>
            </article>  
        </div> 
    );
}
 
export default Item;