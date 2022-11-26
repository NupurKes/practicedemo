import { NavLink } from "react-router-dom";
import { useResolvedPath } from "react-router-dom";
import { useMatch } from "react-router-dom";
import Button from "@mui/material/Button";

function NavButton(props) {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const buttonStyle = {
    //backgroundColor: "green",
    border: "none",
    color: "white",
    //padding: "8px 8px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "13px",
  };
  const activeButtonStyle = {
    backgroundColor: "orange",
    border: "none",
    color: "black",
   // padding: "12px 12px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "15px",
  };
  return (
    <NavLink to={props.to}>
      <Button  variant="outlined" style={match ? activeButtonStyle : buttonStyle}>
        <p>{props.label}</p>
      </Button>
    </NavLink>
  );
}

export default NavButton;
