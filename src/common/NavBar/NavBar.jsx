import style from "./NavBar.module.css"; // Importing CSS module for styling
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons
import { useRef } from "react"; // Importing useRef hook from React

// NavBar component definition
export default function NavBar() {
  const navRef = useRef(); // Creating a reference for the nav element

  // Function to toggle the responsive nav class
  const showNavBar = () => {
    navRef.current.classList.toggle(style.responsive_nav);
  };

  return (
    <>
      {/* Header section with logo and navigation */}
      <header className={style.headerStyling}>
        <div className={style.logoContainer}>
          <img className={style.logoImg} src="logo.png" alt="logo" />{" "}
          {/* Logo image */}
          <h3>MARKETING ASSOCIATION New Zealand</h3> {/* Logo text */}
        </div>

        {/* Navigation section */}
        <nav className={style.navStyling} ref={navRef}>
          <a className={style.aStyling} href="/#">
            Membership
          </a>
          <a className={style.aStyling} href="/#">
            Services
          </a>
          <a className={style.aStyling} href="/#">
            About
          </a>
          <a className={style.aStyling} href="/#">
            Contact
          </a>
          <button className={style.loginBtn}>Login</button> {/* Login button */}
          <button
            className={`${style.navBtn} ${style.navCloseBtn}`}
            onClick={showNavBar}
          >
            <FaTimes /> {/* Close icon */}
          </button>
        </nav>
        <button className={style.navBtn} onClick={showNavBar}>
          <FaBars /> {/* Menu icon */}
        </button>
      </header>
    </>
  );
}
