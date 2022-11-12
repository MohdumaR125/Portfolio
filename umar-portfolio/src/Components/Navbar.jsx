import { NavLink } from "react-router-dom"
import Styles from './Styles.module.css'

const Navbar=()=>{
return(
    <div className={Styles.navbar}>
        <div>MOHD UMAR</div>
        <div className={Styles.links}>
        <NavLink className={Styles.links} to="/">HOME</NavLink>
        <NavLink className={Styles.links} to="/about">ABOUT</NavLink>
        <NavLink className={Styles.links} to="/contact">CONTACT</NavLink>
        <NavLink className={Styles.links} to="/skills">SKILLS</NavLink>
        <NavLink className={Styles.links} to="/project">PROJECTS</NavLink>
        <NavLink className={Styles.links} to="/resume">RESUME</NavLink>
        </div>
        
    </div>
)
}
export default Navbar