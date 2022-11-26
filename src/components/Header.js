import React from "react";
import HomeButton from "./HomeButton";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
return (
    <div>
    <div>
        <HomeButton />
      </div>
      <div>
      <NavLink
className={({ isActive }) =>
isActive ? "link-active" : "link-inactive" }
to="/" > Home
</NavLink>
<NavLink
className={({ isActive }) =>
isActive ? "link-active" : "link-inactive" }
to="/about" > About
</NavLink>
<NavLink
className={({ isActive }) =>
isActive ? "link-active" : "link-inactive" }
to="/contact" > Contact
</NavLink>
      </div>
</div>
);
}
export default Header;