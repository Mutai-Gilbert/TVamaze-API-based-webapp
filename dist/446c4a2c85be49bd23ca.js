import"./style.css";import moviesApi from"./api.js";const displayMovies=async()=>{const s=document.getElementById("list-of-shows");s.innerHTML="",moviesApi.forEach((async n=>{try{const i=await fetch(n),a=await i.json();i.ok||(s.innerHTML="Server Down"),a.movie.forEach((n=>{s.innerHTML+=`\n                    <section class="show_items flex">\n                      <div class="">\n                        <span class="" id=${n.id}>\n                        </span>\n                      </div>\n                      <div class="show_image">\n                        <img class="movie_image" src="${n.image.medium}" alt="asdf">\n                      </div>\n                      <div class="flex actions_name">\n                        <p class="movie">${n.name}</p>\n                        <div>\n                          <i class="fa-solid fa-heart"></i>\n                          <span>\n                            <p>2 likes</p>\n                          </span>\n                        </div>\n                      </div>\n                      <div class="column flex">\n                        <button class="button">Comments</button>\n                        <button class="button">Reservations</button>\n                    </section>`}))}catch(n){s.innerHTML="err"}}))};displayMovies();