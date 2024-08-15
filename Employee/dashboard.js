const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      searchBtn = document.querySelector(".searchBtn"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text");

      //creating a side bar close
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");

        //checking if sidebar is opened or closed.
        if(!sidebar.classList.contains("close")){
          localStorage.setItem("sidebar" , "opened")
        }else{
          localStorage.setItem("sidebar" , "closed")
        }
      });
      //setting the side bar to stay if opened or closed.
        let setSidebar = localStorage.getItem("sidebar")
        if(setSidebar && setSidebar === "opened"){
          sidebar.classList.remove("close");
        }


          // makeing the search icon to open the sidebar is clicked.
        searchBtn.addEventListener("click", () =>{
          sidebar.classList.remove("close");
        });

      // creating a dark and light mode switch
      modeSwitch.addEventListener("click", () =>{
        modeSwitch.classList.toggle("active")
        body.classList.toggle("dark")
    
        // checking if the body is in dark or light mode
      if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode")
        modeText.innerHTML = "Dark Mode";
      } else{
        localStorage.setItem("mode" , "dark-mode")
        modeText.innerHTML = "Light Mode";
      }
    })
    // saving the mode in local storage for persistence
    let getMode = localStorage.getItem("mode")
        if(getMode && getMode === "dark-mode"){
          body.classList.add("dark")
        }

















      //   if(body.classList.contains("dark")){
      //       modeText.innerHTML = "Light Mode";
      //       localStorage.setItem("mode", "dark");
      //   }else{
      //      localStorage.setItem("mode", "light")
      //       modeText.innerHTML = "Dark Mode";
      //   }
      // });
      
      // // checking if dark mode is saved in local storage and applying it if it is
      // if(localStorage.getItem("mode", "dark")){
      //   body.classList.add("dark");
      // }else if(localStorage.getItem("mode", "light")){
      //   body.classList.remove("dark");
      //   localStorage.removeItem("mode", "dark");
      // }

      //getting and setting the dark mode to local Storage
  
    