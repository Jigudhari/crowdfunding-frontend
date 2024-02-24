import{ useState, useEffect }from"react";

import getProject from"../api/get-project";

export default function useProject(projectId) {
    const [project, setProject] =useState();
    const [isLoading, setIsLoading] =useState(true);
    const [error, setError] =useState();

    useEffect(() => {
        // Here we pass the projectId to the getProject function.
        getProject(projectId)
              .then((project) =>{
                setProject(project);
                setIsLoading(false);
            })
            .catch((error) =>{
                setError(error);
                setIsLoading(false);
            });

        }, [projectId]);
            return{ project, isLoading, error };
        }
