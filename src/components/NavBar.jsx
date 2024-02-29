import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
import "./NavBar.css";

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setAuth({ token: null });
    };
      
    //console.log(auth)

    return (
        <div>
            <nav>
                <ul> 
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Register">Register</Link>
                {auth.token ? (
                    <>
                    <Link to="/" onClick={handleLogout}> 
                        Log Out
                    </Link>
                    <Link to="/createpledge">Donate now/</Link>
                    <Link to="/Users">Users</Link>
                    <Link to="/launchproject">Launch Project</Link>
                    </>
                     ) : (
                        
                    <Link to="/login">Login</Link>
                    
                    
                )}
                
                
                <Link to="/contact">Contact Us</Link>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;
