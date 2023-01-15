import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {

    const {isHeader, textLinkFooter, hrefLinkFooter} = props;

    if(isHeader){
        return(
            <nav className="header__navBar">
                <Link className="header__link" to="/category/electronicos">Electronicos</Link>
                <Link className="header__link" to="/category/joyeria">Joyeria</Link>
                <Link className="header__link" to="/category/ropa">Ropa</Link>
                <CartWidget/>
            </nav>
        )
    }else {
        return(
            <nav className="header___navbar">
                <a href={hrefLinkFooter}>{textLinkFooter}</a>
            </nav>
        )
    }
    
}
export default NavBar;