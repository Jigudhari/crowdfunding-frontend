import { useState } from "react";
import React from "react";
import updateProject from "../api/update-project.js"
//import "../pages/CreateProjectPage.css";
import useAuth from "../hooks/use-auth.js";
import {useParams} from "react-router-dom";
import useProject from "../hooks/use-project.js";

function UpdateProjectForm() {
    const {auth, setAuth} = useAuth();
    //const { project, isLoading, error } = useProject(useParams().id);
    const[projectdetails, setProjectdetails] = useState({
        title: "",
        description: "",
        date_created: new Date().toISOString(),
        goal: "",
        image: "",
        is_open: true,
        id : useParams().id,
        //owner : project.owner       
    });
   
    const handleChange = (event) => {
        const{ id, value} = event.target;
        setProjectdetails((prevProjectdetails)=> ({
            ...prevProjectdetails,
            [id]: value,
        }));
    };
    
const handleSubmit = (event) => {
    console.log(projectdetails)
    event.preventDefault();
    if(projectdetails.id) {
            console.log("got it!")
            updateProject(projectdetails
            ).then((response) => {
                //window.localStorage.setItem("token", response.token);
                alert("Project updated successfully!!");
              })
            .catch(()=> alert("Something went wrong"))
        } 
        else{console.log("Project not found!!")}
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

export default UpdateProjectForm;