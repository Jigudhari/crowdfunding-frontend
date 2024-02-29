import { useState } from "react";

import postPledge from "../api/post-pledge.js"
//import "../pages/CreatePledgePage.css";
import useAuth from "../hooks/use-auth.js";


function CreatePledgeForm(props) {
    const {id, project} = props

    const {auth, setAuth} = useAuth();
    const[pledgedetails, setPledgedetails] = useState({
        id:id, 
        supporter:"",
        amount:"",
        comment:"",
        anonymous:false,
        project:id,
    });
    const handleChange = (event) => {
        const {id, value} = event.target;
        setPledgedetails((prevPledgedetails)=> ({
            ...prevPledgedetails,
            [id]: value, 
        }));
    };
    const handleCheckbox = (event) =>{
        setPledgedetails(previousState =>({...previousState,anonymous:!previousState.anonymous}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(pledgedetails.supporter && pledgedetails.amount && 
            pledgedetails.comment) {
                postPledge(pledgedetails)
            } else {console.log('not working')}
        };
return(
    <form>
        <div>
    
        <div><label>Supporter :</label> <input type="text" id="supporter" label="Name" onChange={handleChange} /></div>
        <div><label>Amount :</label> <input type="text" id="amount" label="Amount" onChange={handleChange} /></div>
        <div><label>Comment: </label> <input type="text" id="comment" label="Anything you woud like to say?" onChange={handleChange} /></div>
        <div><label>Annoymous: </label> <input type="checkbox" value={pledgedetails.anonymous} id="annoymous" label="Annoymous" onChange={handleCheckbox} /></div>
        
        </div>
        <button type="submit" onClick={handleSubmit}> 
            submit
        </button>
    </form>
  )
}

export default CreatePledgeForm