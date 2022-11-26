import React from "react";

//import { NavLink } from "react-router-dom";
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
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/about"
        >
          {" "}
          About
        </NavLink> */}
        <NavButton to="/about" label="About" />
        <NavButton to="/education" label="Education" />
        <NavButton to="/hobbies" label="Hobbies" />
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/contact"
        >
          {" "}
          Contact
        </NavLink> */}
        <NavButton to="/contact" label="Contact" />
      </nav>
    </div>
  );
}
export default Header;
