
async function updateProject(projectData) {
     const getProjecturl =`${import.meta.env.VITE_API_URL}/projects/${projectData.id}`;
     const getProjResp =await fetch(getProjecturl,{method:"GET"});    
     if (getProjResp.ok) {
    const projResp  = await getProjResp.json();
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectData.id}/`;
    //Date currrentDate = date_created;
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("userid")
    if(projResp.owner != userid)
    {
        alert('You are not authorized to update this project!');
        return;
    }
    else
    {
    const response = await fetch(url,
        {
            method: "Put",// We need to tell the server that we are sending JSON data
            //so we set the Content-Type header to application/json
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify({
                ...projectData
            }),
        });

    if (response.ok) {
        alert('Welcome here!');
    }

    if (!response.ok) {
        const fallbackError = `Error trying to create new project!`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
    }
    
}
}



export default updateProject;