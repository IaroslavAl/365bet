import logo from "/logo.svg"
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#football">Футбол</a>
                    </li>
                    <li>
                        <a href="#rpl">РПЛ</a>
                    </li>
                    <li>
                        <a href="#la-liga">Ла Лига</a>
                    </li>
                    <li>
                        <a href="#apl">АПЛ</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}