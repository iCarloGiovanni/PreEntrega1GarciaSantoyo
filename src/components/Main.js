import {Button} from "react-bootstrap";
import NewItemList from "./NewItemList";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./carrito";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<NewItemList/>}></Route>
                <Route path="/category/:categoryid" element={<NewItemList/>}></Route>
                <Route path="/category/:categoryid" element={<NewItemList/>}></Route>
                <Route path="/category/:categoryid" element={<NewItemList/>}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;