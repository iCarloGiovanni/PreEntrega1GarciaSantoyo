import NavBar from "./NavBar";

const Header =() => {
    return(
        <header className="header">
            <h1 className="header__title">@Carlo.Giovanni</h1>
            <NavBar isHeader={true}/>
        </header>
    )
}

export default Header;