import { NavLink } from "react-router-dom"

const Navbar=()=>{
return(
    <div>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        
    </div>
)
}
export default Navbar