let runThisStuff = () => {
    let url = 'https://handlers.education.launchcode.org/static/astronauts.json'
    fetch(url).then(function(response){
       response.json().then(function(json){
           let container = document.getElementById('container')
           for(let i = 0; i < json.length;i++){
            
            container.innerHTML += `<div class="astronaut">
            <div class="bio">
            <h4>Astronaut count: ${i + 1}<h4>
               <h3>${json[i].firstName} ${json[i].lastName}</h3>
               <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li ${json[i].active && ('class = "activated"')}>Active: ${json[i].active}</li>
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