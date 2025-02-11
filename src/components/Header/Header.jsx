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
                        isActive={!["rpl", "la-liga", "apl"].includes(activeTab)}>Футбол</Button></Link></li>
                    <li><Link to="/rpl" onClick={() => setMenuOpen(false)}><Button
                        isActive={activeTab === "rpl"}>РПЛ</Button></Link></li>
                    <li><Link to="/la-liga" onClick={() => setMenuOpen(false)}><Button
                        isActive={activeTab === "la-liga"}>Ла Лига</Button></Link></li>
                    <li><Link to="/apl" onClick={() => setMenuOpen(false)}><Button
                        isActive={activeTab === "apl"}>АПЛ</Button></Link></li>
                </ul>
            </nav>
        </header>
    )
}