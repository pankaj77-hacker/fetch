
const cardDiv = document.querySelector(".card");
const boxDiv = document.querySelector(".box");
const heading = document.querySelector(".heading");
const para = document.querySelector(".para");

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c54dacb95631330e657284be2723541d&page=1')
.then((res)=> res.json())
.then((data)=> {
  const movie = data.results[0];
   cardDiv.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    
    `;
    
 heading.innerText = movie.title;


    para.innerText = movie.overview;


});
