
//  let datalist=[]
//  async function GetGames(category) {

//     const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': '4bfc66caf7msh4117bbcd2427e29p122e21jsnad95c9bfd801',
//         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//       }
//     });

//     datalist = await response.json();
//     console.log(datalist); 
//     displayGames(datalist)
  
// }

//  GetGames('shooter');
 

//   function displayGames(data){
// let box=` `
// for(let i=0;i<data.length;i++){
// box += `
//   <div onclick="getDetails(${data[i].id})" class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
//     <div class="game-info bg-transparent card h-100 p-2">
//       <img src="${data[i].thumbnail}" alt="thumbnail" class="img-fluid rounded mb-2" style="height: 180px; object-fit: cover;">
      
//       <div class="game-child d-flex justify-content-between align-items-center mb-2">
//         <h6 class="mb-0 fw-bold text-primary" style="font-size: 1rem;">${data[i].title}</h6>
//         <button type="button" class="btn btn-sm btn-outline-success px-2 py-0" style="font-size: 0.8rem;">Free</button>
//       </div>

//       <p class="text-white small mb-3">${data[i].short_description}</p>

  
//       <footer class="d-flex justify-content-between pt-2 mt-auto">
//         <span class="btn btn-sm btn-outline-primary">${data[i].genre}</span>
//         <span class="btn btn-sm btn-outline-secondary">${data[i].platform}</span>
//       </footer>

//     </div>
//   </div>
// `;

// }
// document.getElementById('group-games').innerHTML=box
// }
// function displayDetails(data){
//     container=` `
    
//       container+=`
//          <div class="col-md-4">
//           <img src="${data.thumbnail}" class="img-fluid">
//         </div>
//         <div class="col-md-8">
//           <h3 class="text-white">Title: ${data.title}</h3>
//           <p  class="text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
//           <p  class="text-white">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
//           <p  class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
//           <p class="small text-white">${data.description}</p>
//             <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
//         </div>
//       `
    
//     document.getElementById('details').innerHTML=container
// }

// async function getDetails(id) {
//   document.getElementById('games').classList.add('d-none')
//    document.getElementById('gamesDetails').classList.remove('d-none')
//   const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '4bfc66caf7msh4117bbcd2427e29p122e21jsnad95c9bfd801',
//       'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//     }
//   });

//   const data = await response.json();
//   console.log(data);
//   displayDetails(data)
  
//   document.querySelector('nav').classList.add('d-none');
//   document.getElementById('gamesSection').classList.add('d-none');
//   document.getElementById('gamesDetails').classList.remove('d-none');
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }
document.getElementById('btnClose').addEventListener('click', function() {
  document.getElementById('games').classList.remove('d-none');
  document.getElementById('gamesDetails').classList.add('d-none');
});
import { DisplayGames } from "./ui.js";
import { GameDetails } from "./details.js";

const ui = new DisplayGames();
const details = new GameDetails();



async function getAllGames(category) {
   const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4bfc66caf7msh4117bbcd2427e29p122e21jsnad95c9bfd801',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
  });

  const data = await response.json();
  ui.displayGames(data);
}


window.getDetails = function (id) {
  document.querySelector("nav").classList.add("d-none"); 
  details.getGameDetails(id);
};

let navLink=document.querySelectorAll('.nav-link')
navLink.forEach(function(item){
  item.addEventListener('click',function(e){
    let clicked=e.target
    let category=clicked.innerText
    console.log(category);
    getAllGames(category)


    
  })
})
getAllGames('shooter');