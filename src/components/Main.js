import {Button} from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return(
        <main>
            <h2>Estamos construyendo algo genial</h2>
            <ItemListContainer greeting="¡Regresa Pronto!"/>
            <Button>Aceptar</Button>
            {/* colocar imagen dentro de la carpeta public */}
            {/* <img src="/img/imagen.png"/>  */}
        </main>
    )
}

export default Main;