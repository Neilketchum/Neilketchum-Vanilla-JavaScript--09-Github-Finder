class GitHub {
    constructor(){
        this.client_id = '0534702efb6a7b561475';
        this.client_secret = '7990ed6f97ecf61ca36f1125b6622489c984a0a7';
    }
    async getUser(user){
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
            const RepoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);          
            const profile = await profileResponse.json();
            const repos = await RepoResponse.json();
            return {
                profile : profile,
                repos : repos
            }

    }
  
}

