import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const projectLink = `project/${props.projectData.id}`; 
    
    return (
        <div className="project-card">
              <Link to={projectLink}>
                <img src={props.projectData.image} />
                <h3>{props.projectData.title}</h3>
             </Link>
        </div>
    );
}

export default ProjectCard;
