async function postProject(title,description,goal,isopen) {
    const url =`${import.meta.env.VITE_API_URL}/projects/`;
    //Date currrentDate = date_created;
    const response =await fetch(url,
        {method:"POST",// We need to tell the server that we are sending JSON data
        //so we set the Content-Type header to application/json
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            "id": 4,
            "owner": 2,
            "title": title,
            "description": description,
            "goal": goal,
            "image": "https://martech.org/wp-content/uploads/2015/11/idea_1920-800x600.jpg",
            "is_open": isopen,
            "date_created": "2024-02-23T00:00:00Z"
        }),
    });


    if (!response.ok) {
        const fallbackError =`Error trying to create new project!`;

        const data =await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail?? fallbackError;
        throw new Error(errorMessage);
     }
     
     return await response.json();
    }
    
    

export default postProject;