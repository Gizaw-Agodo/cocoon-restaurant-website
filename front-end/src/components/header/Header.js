import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";
import "@fontsource/montez";
import * as Scroll from "react-scroll";

function Header() {
  const scroller = Scroll.scroller;

  const scrollTo = (area) => {
    scroller.scrollTo(area, {
      duration: 1000,
      delay: 10,
      smooth: true,
      offset: -110,
    });
  };
  return (
    <header className="header">
      <div className="navigation">
        <div className="logo">
          <h1
            style={{
              fontFamily: "Montez",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Cocoon Restaurant
          </h1>
        </div>
      </div>

      <div className="nav__menu ">
        <div className="nav__list__wrapper d-flex align-items-center gap-5">
          <ul className="nav__list">
            <li className="nav__item" >
              <p onClick={() => scrollTo("home")}>
                Home
              </p>
            </li>
            <li className="nav__item" >
              <p onClick={() => scrollTo("menu")}>
                Menu
              </p>
            </li>
            <li className="nav__item" >
              <p onClick={() => scrollTo("about")}>
                About
              </p>
            </li>
            <li className="nav__item" >
              <p onClick={() => scrollTo("contact")}>
                Contact
              </p>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="mobile__menu">
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
