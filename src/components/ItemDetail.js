import { useCarrito } from "./CustomProvider";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = (props) => {
     
    const productID = props.productID
    const productos = props.productos
    const producto = productos[productID]
    const [stock, setStock] = useState(5)

    const {totalProductos, setTotalProductos,
            addProduct} = useCarrito()

    const onAdd = (numProd) => {
        setStock(stock-numProd)
        setTotalProductos(totalProductos + numProd)

        addProduct(producto, numProd)
    }

    return ( 
        <div className="productDetails">
                    <img src={producto.image} alt={productos[productID].title}/>
                    <div className="productDescription">
                        <h2> {producto.title} </h2>
                        <p> {producto.description} </p>
                        <h3> ${productos[productID].price} </h3>
                        <ItemCount stock={stock} onAdd={onAdd}/>
                    </div>
                </div>
    );
}
 
export default ItemDetail;