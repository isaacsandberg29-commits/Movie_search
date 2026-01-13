const apiKey = "9eac46e9";

async function searchMovie() {
  const query = document.getElementById("searchInput").value;
  const moviesDiv = document.getElementById("movies");

  moviesDiv.innerHTML = "Loading...";

  const response = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
  );

  const data = await response.json();

  if (data.Response === "True") {
    moviesDiv.innerHTML = "";

    data.Search.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      movieDiv.innerHTML = `
        <img src="${movie.Poster}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      `;

      moviesDiv.appendChild(movieDiv);
    });

  } else {
    moviesDiv.innerHTML = "No movies found 😢";
  }
}


let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
