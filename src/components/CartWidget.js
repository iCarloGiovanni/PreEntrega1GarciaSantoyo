import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {

    const { totalProductos } = useCarrito();

    return (
        <div className="cart">
            <Link to="/carrito">
                <span className="material-icons">shopping_cart</span>
                <span className="cart-count">{totalProductos}</span>
            </Link>
        </div>
    );
}
 
export default CartWidget;