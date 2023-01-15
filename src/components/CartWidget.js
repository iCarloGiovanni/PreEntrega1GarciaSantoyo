import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="cart">
            <Link to="/carrito">
                <span className="material-icons">shopping_cart</span>
                <span className="cart-count">1</span>
            </Link>
        </div>
    );
}
 
export default CartWidget;