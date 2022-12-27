import CartWidget from "./CartWidget";


const NavBar = (props) => {

    const {isHeader, textLinkFooter, hrefLinkFooter} = props;



    if(isHeader){
        return(
            <nav className="header__navBar">
                <a className="header__link" href="#">Productos</a>
                <a className="header__link" href="#">Diseños</a>
                <a className="header__link" href="#">Contacto</a>
                <CartWidget/>
            </nav>
        )
    }else {
        return(
            <nav className="header___navbar">
                <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>
            </nav>
        )
    }
    
}
export default NavBar;