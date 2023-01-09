import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Sections from "../Sections/Sections";
import { useRef } from 'react';

const Navbar = () => {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };


  return (
    <div>
    <header className="header">
        <div className="logo"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></div>
        <nav>
          <ul className="nav__links">
            <li onClick={()=> scrollToSection(home)}>Home
            </li>
            <li onClick={()=> scrollToSection(about)}> About
            </li>
            <li onClick={()=> scrollToSection(contact)}>Contact
            </li>
          </ul>
        </nav>
        <button>Contact</button>
    </header>
     <Sections home={home} about={about} contact={contact}/>
    </div>
  );
};

export default Navbar;
