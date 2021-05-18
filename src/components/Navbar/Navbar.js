import Logo from "../../assests/Logo.png";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useHistory } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  //   const history = useHistory();
  //   const {
  //     location: { pathname: routeName },
  //   } = history;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showDropdown = () => {
    setDropdown(true);
  };
  const MouseExit = () => {
    setDropdown(false);
  };
  const hideDropdown = () => {
    closeMobileMenu();
    setDropdown(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //   useEffect(() => {
  //     if (routeName === "/") {
  //       setNavColor(false);
  //     } else {
  //       setNavColor(true);
  //     }
  //   }, [routeName]);
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeNavBarBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavBarBackground);
  return (
    <header>
      <nav
        className={
          navbar
            ? "navbar-containers bg-active"
            : "containers navbar-containers"
        }
      >
        <NavLink
          to="/"
          className="navbar-logo lg:mt-6"
          onClick={closeMobileMenu}
        >
          <img src={Logo} alt="24  Design Logo" className="w-36 h-28" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        {/* NAV_DROPDOWN */}

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              // className="nav-links"
              to="/about"
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-links"
              // className="nav-links"
              to="/features"
              onClick={closeMobileMenu}
              exact
            >
              Features
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              // className="nav-links"
              to="/map"
              onClick={closeMobileMenu}
            >
              Our Roadmap
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              // className="nav-links"
              to="/faq"
              onClick={closeMobileMenu}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
{
  /* <div class="header-container">
  <NavLink to="/">
    <img class="logo" src={Logo} alt="Gotcha Logo" />
  </NavLink>
  <nav class="main-menu">
    <NavLink class="menu-button" to="#">
      About Us
    </NavLink>
    <div class="dropdown-wrapper menu-button">
      <NavLink class="menu-button" to="#">
        Contact
      </NavLink>
      <div class="drop-menu">
        <NavLink class="menu-button" to="#">
          Complaints
        </NavLink>
        <NavLink class="menu-button" to="#">
          Praise
        </NavLink>
        <NavLink class="menu-button" to="#">
          Threats
        </NavLink>
      </div>
    </div>
    <NavLink class="menu-button" to="#">
      Our RoadMap
    </NavLink>
    <NavLink class="menu-button" to="#">
      FAQs
    </NavLink>
  </nav>
</div>; */
}
