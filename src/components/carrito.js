import CardContainer from "./CardContainer"
import { useCarrito } from "./CustomProvider";
import FormContainer from "./FormContainer"

const Carrito = () => {

    const {carrito} = useCarrito()

    if(carrito.length > 0){
        return ( 
            <div>
                <h1> Tu carrito </h1>
                <CardContainer/>
                <FormContainer/>
            </div>
        );
    }else{
        return(
            <FormContainer/>
        )
    }
    
}

export default Carrito;
