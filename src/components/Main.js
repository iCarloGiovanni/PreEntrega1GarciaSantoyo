import NewItemList from "./NewItemList";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./carrito";
import Checkout from "./Checkout";

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
                <Route path="/checkout" element={<Checkout/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;