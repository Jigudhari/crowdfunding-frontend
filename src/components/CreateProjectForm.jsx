import { useState } from "react";

import postProject from "../api/post-project.js"
import "../pages/CreateProjectPage.css";
import useAuth from "../hooks/use-auth.js";


function CreateProjectForm() {
    const {auth, setAuth} = useAuth();
    const[projectdetails, setProjectdetails] = useState({
        title: "",
        description: "",
        date_created: new Date().toISOString(),
        goal: "",
        image: "",
        is_open: true,
    });
    const handleChange = (event) => {
        const{ id, value} = event.target;
        setProjectdetails((prevProjectdetails)=> ({
            ...prevProjectdetails,
            [id]: value,
        }));
    };
    
const handleSubmit = (event) => {
    event.preventDefault();
    if(projectdetails.title && projectdetails.description && projectdetails.goal
         && projectdetails.is_open) {
            postProject(projectdetails
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                alert("Project Launch is successful!");

              });
            //.catch(()=> alert("Something went wrong"))
        } else{console.log("Hello!")}
    };    

 return( 
    <form>
        <div>

         <div><label>Title :</label> <input type="text" id="title" lable="Title" onChange={handleChange} /> </div>
         <div><label>Description :</label> <input type="text" id="description" onChange={handleChange} /> </div> 
         <div><label>Goal :</label> <input type="text" id="goal"onChange={handleChange} /> </div>
         <div><label>Image :</label> <input type="text" id="image"onChange={handleChange} /> </div>
         {/* <div><label>Is Open :</label> <input type="checkbox" id="is_open"onChange={handleChange} /> </div> */}
         
        </div>
        <button type="submit" onClick={handleSubmit}>
            submit
        </button>
    </form>
  )
}

export default CreateProjectForm;