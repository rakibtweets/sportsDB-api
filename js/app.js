// search for team details

const searchTeam = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value 
    searchField.value = ''

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTeamDetails(data.teams))
}

// display team details

const displayTeamDetails = (teams) => {
    const teamContainer = document.getElementById('team-details')
    teamContainer.textContent = ''

    for (const team of teams) {

        const div = document.createElement('div')
        div.classList.add('col')
       

        div.innerHTML = `
        <div class="card">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${team.strTeam}</h3>
                <h6 class="card-title">${team.strLeague}</h6>
                <p class="card-text">${team.strDescriptionEN.slice(0,220)}</p>
                <a href="#" class="btn btn-primary">Club Details</a>
            </div>
        </div>
        
        `
        teamContainer.appendChild(div)      
    }

};



// single team details

const clubDetails = () => {
    
}