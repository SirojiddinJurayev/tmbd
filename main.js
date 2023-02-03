const API_KEY = "b1e514e56612cf142b03ff7d8257830e";
const POPULAR_MOVES = "https://api.themoviedb.org/3/movie/popular?api_key=b1e514e56612cf142b03ff7d8257830e&language=en-US&page=1";
const moviesBox = document.querySelector("#movies");
const trendMovies = "https://api.themoviedb.org/3/trending/movie/day?api_key=b1e514e56612cf142b03ff7d8257830e"

fetch(POPULAR_MOVES)
.then((response) => response.json())
.then((result) => {
  console.log(result);
    let str = " ";
    result.results.forEach((movie) => {
        let elem = `
        <div class="card" data-id=${movie.id}>
        <div class="aplacation">
          <div class="card__item">
            <a href="film.html">
              <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}" class="film_img" alt="" width="150px" height="250px">
            </a>
            <div class="ldBar label-center progres"  data-value=${movie.vote_average * 10} data-preset="circle" style="width:38px; height:38px; color:white;"></div>
          </div>
            <div class="more">
              <i class="bi bi-three-dots"></i>
            </div>
            <h3 class="film_name">${movie.title}</h3>
            <p class="film_date">${movie.release_date}</p>           
          </div>
        </div>`;
        str += elem;
    });
    moviesBox.innerHTML =str;
});
function getLoocalStorage(key, text) {
  let value = JSON.stringify(text);
  localStorage.setItem(key, value);
}

const moviesOneBox = document.querySelector("#movies_one");

fetch(trendMovies)
.then((response) => response.json())
.then((result) => {
  console.log(result);
    let str = " ";
    result.results.forEach((movie) => {
        let elem = `
        <div class="card" data-id=${movie.id}>
        <div class="aplacation">
          <div class="card__item">
            <a href="film.html">
              <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}" class="film_img" alt="" width="150px" height="250px">
            </a>
            <div class="ldBar label-center progres"  data-value="50" data-preset="circle" style="width:38px; height:38px; color:white;"></div>
          </div>
            <div class="more">
              <i class="bi bi-three-dots"></i>
            </div>
            <h3 class="film_name">${movie.title}</h3>
            <p class="film_date">${movie.release_date}</p>           
          </div>
        </div>
      `;
        str += elem;
    });
    moviesOneBox.innerHTML =str;
});



const titleOfTab = document.getElementsByClassName("table__title");
const tabContents = document.getElementsByClassName("tab__inner");
console.log(tabContents);
Array.from(titleOfTab).forEach((item, index) =>{
    // console.log(item, "- item");
    // console.log(index, "- index");
    item.addEventListener('click', (e) => {
        Array.from(titleOfTab).forEach((tab, index) => {
            // console.log(tab.classList);
            tab.classList.remove("active__tab");
        });
        console.log(e.target.dataset.id);
        titleOfTab[e.target.dataset.id].classList.add("active__tab");
        Array.from(tabContents).forEach((tab, index) => {
            // console.log(tab.classList);
            tab.classList.remove("active__content");
        });
        tabContents[e.target.dataset.id].classList.add("active__content");
    });
    
});
