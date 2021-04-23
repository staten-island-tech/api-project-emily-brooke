import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=6000&vote_average.gte=8&epi+key=${key}`
    );
    const data = await response.json();
    data.results.forEach((movie) => {
      let genreArr = []; //have an array with the ids that we got from the incoming movies but we don't have any names -> have to get some names from our overall genres
      const addGenre = function () {
        genres.forEach((element) => {
          if (movie.genre_ids.includes(element.id)) {
            genreArr.push(element.name);
            return genreArr;
          } //go through each of the genres one at a time and check if its id number is included in the movie genre ids -> if it is, we'll push the overall genres into the genreArr []
        });
      };
      addGenre();
      console.log(genreArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-card">
      <div class="movie-card-front">
        <img
          src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
          alt=""
          class="poster"
        />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">${movie.original_title}</h3>
        <div class="score-box">
          <p class="user-score">Community Score</p>
          <p class="user-score">${movie.vote_average}</p>
        </div>

        <div class="release-box">
          <p class="release-date">Released</p>
          <p class="release-date">${movie.release_date}</p>
        </div>

        <div class="movie-genres">
          ${genreArr}
        </div>
      </div>
    </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
