import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import postRegister from "../api/post-register.js";
//import useAuth from "../hooks/use-auth.js";

function RegisterForm() {
    //const navigate = useNavigate();
   // const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        bio: "",
        image:"",
    });

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
        if (credentials.username && credentials.email && credentials.password 
            && credentials.bio) {
            postRegister(credentials
                //credentials.username,
                //credentials.email,
                //credentials.password,
                //credentials.bio,
                //credentials.image,
            )} else {console.log('Error registering')};


               // navigate("/")
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
            <label htmlFor="email">Email Address:</label>
            <input
                    type="email" 
                    id="email" 
                    placeholder="email"
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
        <div>
            <label htmlFor="bio">Bio:</label>
            <input
                    type="bio" 
                    id="bio" 
                    placeholder="bio"
                    onChange={handleChange}
                />
        </div>
        <div>
            <label htmlFor="image">Profile Image Url:</label>
            <input
                    type="text" 
                    id="image" 
                    placeholder="image"
                    onChange={handleChange}
                />
        </div>
        <button type="Register" onClick={handleSubmit}>
            Register
        </button>
    </form>
    );
}

export default RegisterForm;