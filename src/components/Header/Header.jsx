import "./Header.css"
import logo from "/logo.svg"
import Button from "../Button/Button.jsx"
import {Link, useLocation} from 'react-router-dom';

export default function Header() {
    const location = useLocation()
    const activeTab = location.pathname.substring(1)

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="">
                            <Button isActive={activeTab === ""}>Футбол</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/rpl">
                            <Button isActive={activeTab === "rpl"}>РПЛ</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/la-liga">
                            <Button isActive={activeTab === "la-liga"}>Ла Лига</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/apl">
                            <Button isActive={activeTab === "apl"}>АПЛ</Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}