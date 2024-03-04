import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import useAuth from "../hooks/use-auth.js";
import "./LoginForm.css";

function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    //STep1 : when you are on login textbox and done typing your user name 
    //and moved to pwd textbox
    //print (username) : pratikptel26
    ///print(password) : "";
//Step2 : user also typed pwd and just moved to login button
    //print (username) : pratikptel26
   // print(password) : 123456;

    const handleChange = (event) => {
        const { id, value } = event.target;
        //const { id, value } ={"username","pratikpatel26"}}
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
             [id]: value,
        }));
    }; 
    const handleSubmit = (event) => { //async before event here? KG
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                if(response == null)
                {
                  alert("Incorrect username or password!");
                }
                else
                {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("userid", response.user_id);
                setAuth({
                    token: response.token,
                    userid: response.user_id
                });
                navigate("/")
                }
            });
        }
    }; 
 return (
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
                type="text"
                id="username" 
                placeholder="Enter username"
                onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
                 type="password" 
                 id="password" 
                 placeholder="Password"
                 onChange={handleChange}
             />
        </div>
        <button type="submit" onClick={handleSubmit}>
            Login
        </button>
    </form>
    );
}

export default LoginForm;
