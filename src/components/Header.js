import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header =() => {
    return(
        <header className="header">
            <Link className="header__title" to={`/`}> My Fake Store </Link>
            <NavBar isHeader={true}/>
        </header>
    )
}

export default Header;