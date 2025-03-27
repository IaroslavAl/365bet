import "./Header.css"
import logo from "/logo.svg"
import Button from "../Button/Button.jsx"
import {useState} from "react"
import {Link, useLocation} from "react-router-dom"

export default function Header() {
    const location = useLocation()
    const activeTab = location.pathname.split("/")[1]
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="" onClick={() => setMenuOpen(false)}><Button
                        isActive={!["legal-bookmakers", "foreign-bookmakers"].includes(activeTab)}>Футбол</Button></Link></li>
                    <li><Link to="/legal-bookmakers" onClick={() => setMenuOpen(false)}><Button
                        isActive={activeTab === "legal-bookmakers"}>Легальные букмекеры</Button></Link></li>
                    <li><Link to="/foreign-bookmakers" onClick={() => setMenuOpen(false)}><Button
                        isActive={activeTab === "foreign-bookmakers"}>Зарубежные Букмекеры</Button></Link></li>
                </ul>
            </nav>
        </header>
    )
}