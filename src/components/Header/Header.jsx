import logo from "/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
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
            <a href="#live">Трансляции</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
