import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <header className="header">
        <div className="logo"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></div>
        <nav>
          <ul className="nav__links">
            <li>
              <a >Home</a>
            </li>
            <li>
              <a >About</a>
            </li>
            <li>
              <a >Service</a>
            </li>
            <li>
              <a >Contact</a>
            </li>
          </ul>
        </nav>
        <button>Contact</button>
    </header>
  );
};

export default Navbar;
