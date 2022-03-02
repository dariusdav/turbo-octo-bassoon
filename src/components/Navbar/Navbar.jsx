import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const NavBar = () =>{
    const {user,setUser} = useUser()
    const handleLogoutClick = () =>{
        if (window.confirm("Are you sure?")){
            setUser(null)
            sessionStorage.removeItem("user")
        }
    }
    return (
        <nav className="nav">
            <span className="site-name">
                Lost in Translation
            </span>
            {user != null &&
            <div className="link-div">
                <ul>
                    <NavLink to="/Translation" className={"link"}>Translation</NavLink>
                </ul>
                <ul>
                    <NavLink to="/Profile"className={"link"}>Profile</NavLink>
                </ul>
                <ul className="logout-button">
                    <button onClick={handleLogoutClick}>Logout</button>
                </ul>
            </div>
            }
        </nav>
    )
}

export default NavBar