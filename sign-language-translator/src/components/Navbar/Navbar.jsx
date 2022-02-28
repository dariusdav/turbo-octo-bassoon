import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const NavBar = () =>{
    const {user,setUser} = useUser()
    const handleLogoutClick = () =>{
        if (window.confirm("Are you sure?")){
            localStorage.removeItem("user")
            setUser(null)
        }
    }
    return (
        <nav>
            <ul>
                <li>
                Lost in Translation
                </li>
            </ul>
            {user != null &&
            <ul>
                <li>
                    <NavLink to="/Translation">Translation</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
                <li>
                    <button onClick={handleLogoutClick}>Logout</button>
                </li>
            </ul>
            }
        </nav>
    )
}

export default NavBar