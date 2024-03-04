import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import CreatePledgeForm from "../components/CreatePledgeForm";


function ProjectPage() {
    const { id } = useParams();

    const { project, isLoading, error } = useProject(id);
    //console.log(isLoading)

    if (isLoading) {
        return (<p>Loading....</p>)
     }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <div>
            <p>ID : {project.id}</p>
            <p>{project.title}</p>
            <p>Created at: {project.date_created}</p>
            <p>{`Status: ${project.is_open}`}</p>
            <p>Goal :{project.goal}</p>
            <p>owner :{project.owner}</p>
            {/* <label for="html">Owner : {project.owner}</label> */}
            {/* <h6>Pledges:{project.pledges}</h6> */}
            {/* <h1>Owner:{project.owner}</h1> */}
            <ul> 
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
            <CreatePledgeForm id={id} project={project.title} />
         </div>
    );
}
    

export default ProjectPage