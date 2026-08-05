// const numbers=[2,4,6,8,10];
// const square=numbers.map(num=>num*num);
// console.log(square); 



// const names =["rahul", "priya","aman","sneha"];
// const words= names.map(word=>word.toUpperCase());
// console.log(words);



// // const marks = [45,78,92,50,60];
// // const number = marks.map((marks)=>{
// //     if(marks>=50){
// //         return "pass";
// //     }
// //     else{
// //         return "fail";
// //     }
// // });
// // console.log(number);

// const items = ["apple","banana", "mango"];
// const numberlisted = items.map((item, index)=>`${index + 1}.${item}`);
// console.log(numberlisted);


const container = document.querySelector(".container");

fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c54dacb95631330e657284be2723541d&page=1")
.then((res) => res.json())
.then((data) => {

    container.innerHTML = data.results.map((movie) => {
        return `
            <div class="box">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                </div>

                <h2 class="heading">${movie.title}</h2>

                <p class="para">
                    ${movie.overview}
                </p>
            </div>
        `;
    }).join("");

});