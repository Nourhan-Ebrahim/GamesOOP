import { Game } from "./games.js";

export class DisplayGames {
  displayGames(data) {
    let box = "";

    for (let i = 0; i < data.length; i++) {
      const game = new Game(
        data[i].id,
        data[i].thumbnail,
        data[i].title,
        data[i].short_description,
        data[i].genre,
        data[i].platform
      );

      box += `
        <div onclick="getDetails(${game.id})" class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
          <div class="game-info bg-transparent card h-100 p-2">
            <img src="${game.thumbnail}" alt="thumbnail" class="img-fluid rounded mb-2" style="height: 180px; object-fit: cover;">
            
            <div class="game-child d-flex justify-content-between align-items-center mb-2">
              <h6 class="mb-0 fw-bold text-primary" style="font-size: 1rem;">${game.title}</h6>
              <button type="button" class="btn btn-sm btn-outline-success px-2 py-0" style="font-size: 0.8rem;">Free</button>
            </div>

            <p class="text-white small mb-3">${game.short_description}</p>

            <footer class="d-flex justify-content-between pt-2 mt-auto">
              <span class="btn btn-sm btn-outline-primary">${game.genre}</span>
              <span class="btn btn-sm btn-outline-secondary">${game.platform}</span>
            </footer>
          </div>
        </div>
      `;
    }


    document.getElementById("group-games").innerHTML = box;
  }
}
