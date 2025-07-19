export class GameDetails {
  async getGameDetails(id) {
    document.getElementById('games').classList.add('d-none');
    document.getElementById('gamesDetails').classList.remove('d-none');

const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
 
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4bfc66caf7msh4117bbcd2427e29p122e21jsnad95c9bfd801',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });

    const data = await response.json();
    this.displayDetails(data);
  }
displayDetails(data){
 let  container=` `
    
       container+=`
          <div class="col-md-4">
           <img src="${data.thumbnail}" class="img-fluid">
         </div>
         <div class="col-md-8">
           <h3 class="text-white">Title: ${data.title}</h3>
           <p  class="text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
           <p  class="text-white">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
           <p  class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
           <p class="small text-white">${data.description}</p>
             <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
         </div>
       `
    
     document.getElementById('details').innerHTML=container
 }
 
  }

