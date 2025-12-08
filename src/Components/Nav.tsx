import { NavLink } from "react-router-dom"
import Add from "./Add"


export default function Nav() {
    return <div className="nav">
        <div className="nav-home">
            <NavLink to={'/'}>
                <i className="fa-solid fa-house"></i>

            </NavLink>
            <NavLink to={'/login_user'}>
                <i className="fa-solid fa-user"></i>
            </NavLink>
            <Add />
        </div>
        {/* <div className="circ-des"></div> */}
    </div>
}