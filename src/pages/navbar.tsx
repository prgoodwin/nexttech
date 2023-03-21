import Button from "./button"

export default function NavBar(){
    return (
        <nav>
            <img src="menu.png" className="nav--menu"/>
            <p className="nav--title">NextTech</p>
            <img src="help.png" className="nav--help"/>
            <Button />
        </nav>
    )
}