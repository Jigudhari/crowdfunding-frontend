import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
//import { allProjects } from "../data";
import "../pages/HomePage.css";
//import CreateProjectForm from "../components/CreateProjectForm";
//import CreatePledgeForm from "../components/CreatePledgeForm";

function HomePage() {
    const { projects, isLoading, error } = useProjects();

if (isLoading) return <p>Loading..</p>;
if (error) return <p>{error.message}</p>
    
    return (
        
        <div id="project-list"> 
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        
    );
}


export default HomePage;