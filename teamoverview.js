const team = document.getElementById("team"),
      project = document.getElementById("project"),
      teamProject = document.getElementById("team-project"),
      projectOverview = document.getElementById("project-overview");


    
        team.addEventListener("click" , ()=>{
            projectOverview.style.display = "none";
            teamProject.style.display = "block";
            team.style.cssText=" text-decoration:underline; text-decoration-thickness: 2px; text-decoration-color:#3CADFF;";
            return;
        })
        project.addEventListener("click" , ()=>{
            team.style.textDecoration="none";
            teamProject.style.display = "none";
            projectOverview.style.display = "block";
            return;
        })
     