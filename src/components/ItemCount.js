import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1)

    const handleSumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const handleRestar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const handleAgregar = () => {
        onAdd(contador)
    }

    const handleReset = () => {
        setContador(1)
    }

    return ( 
        <div className="itemCount">
            <div>
                <button className="countButton" onClick={handleRestar}>-</button>
                <p>{contador}</p>
                <button className="countButton" onClick={handleSumar}>+</button>
            </div>
            <div>
                <button className="actionButton" onClick={handleReset}>Reset</button>
                <button className="actionButton" onClick={handleAgregar}>Agregar</button>
            </div>
        </div>
     );
}
 
export default ItemCount;