import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = ({ productos }) => {

    const params = useParams()

    const electronicos = productos.filter((prod)=>
        prod.category.includes('electronics'))

    const joyeria = productos.filter((prod)=>
        prod.category.includes('jewelery'))

    const ropa = productos.filter((prod)=>
        prod.category.includes('clothing'))

    if(params.categoryid === "electronicos"){
        return(
            <div className="itemList">
                {electronicos.map((producto)=>{
                    return(
                        <Item producto={producto} key={producto.id}/>
                    )
                })}
            </div> 
        )
    }else if(params.categoryid === "joyeria"){
        return(
            <div className="itemList">
                {joyeria.map((producto)=>{
                    return(
                        <Item producto={producto} key={producto.id}/>
                    )
                })}
            </div> 
        )    
    }else if(params.categoryid === "ropa"){
        return(
            <div className="itemList">
                {ropa.map((producto)=>{
                    return(
                        <Item producto={producto} key={producto.id}/>
                    )
                })}
            </div> 
        )    
    }else{
        return ( 
            <div className="itemList">
                {productos.map((producto)=>{
                    return(
                        <Item producto={producto} key={producto.id}/>
                    )
                })}
            </div> 
        )}
}
 
export default ItemList;