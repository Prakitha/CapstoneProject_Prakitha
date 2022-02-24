import { NavLink } from "react-router-dom";
import './NavBar.css'
const NavBar = () =>{
    return(
        <div>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">HOME</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/search">SEARCH</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/addDoctor">ADD</NavLink>
        

                 </div>

)
}

export default NavBar;