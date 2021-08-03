let runThisStuff = () => {
    let url = 'https://handlers.education.launchcode.org/static/astronauts.json'
    fetch(url).then(function(response){
       response.json().then(function(json){
           let container = document.getElementById('container')
           for(let i = 0; i < json.length ;i++){
            json[i].active && console.log(true)
            container.innerHTML += `<div class="astronaut">
            <div class="bio">
            <p>Current Astronaut count = ${i + 1}<p>
               <h3>${json[i].firstName}</h3>
               <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li class = 'active'>Active: ${json[i].active}</li>
                  <li>Skills: ${(json[i].skills.join(', '))}</li>
               </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            
         </div>`
         
           }
           
       }) 
    })
    
}

window.addEventListener('load', runThisStuff)