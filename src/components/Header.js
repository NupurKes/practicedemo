import React from "react";
import HomeButton from "./HomeButton";
import { NavLink } from "react-router-dom";
import "./Header.css";
import NavButton from "./NavButton";

function Header() {
//   const buttonStyle = {
//     backgroundColor: "green",
//     border: "none",
//     color: "white",
//     padding: "15px 32px",
//     textAlign: "center",
//     textDecoration: "none",
//     display: "inline-block",
//     fontSize: "16px",
//   };
  return (
    <div>
      <div>
        <HomeButton />
      </div>
      {/* <NavLink>
        <button style={buttonStyle}>
          <p>Home</p>
        </button>
      </NavLink> */}
      
      <nav>
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/"
        >
          {" "}
          Home
        </NavLink> */}
        <NavButton to="/" label="Home" />
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/about"
        >
          {" "}
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/contact"
        >
          {" "}
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
export default Header;
