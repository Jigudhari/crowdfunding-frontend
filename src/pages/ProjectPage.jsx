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
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h5>Goal :{project.goal}</h5>
            <h4>Pledges:</h4>
            
            <CreatePledgeForm id={id} project={project.title} />
            <ul> 
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
         </div>
    );
}
    

export default ProjectPage