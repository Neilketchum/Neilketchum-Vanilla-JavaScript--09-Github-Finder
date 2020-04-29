// Init GIthub
const gitHub = new GitHub()
const  ui = new UI();
const searchUser = document.getElementById('searchUser')
searchUser.addEventListener('keyup',(e) =>{
    const userText = e.target.value;
    if(userText !== ""){
        // Make HTTP call;
        gitHub.getUser(userText).then(
            data=>{
                console.log(data.profile)
                if(data.profile.message === "Not Found"){
                    // Show Alert
                    ui.showAlert("User Not Found","alert alert-danger")
                   
                }else{
                    // Show Profile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            }
        )
    }else{
        ui.clearProfile();
    }
})