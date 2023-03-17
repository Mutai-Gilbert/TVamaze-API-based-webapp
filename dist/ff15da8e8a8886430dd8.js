import"./style.css";import api from"./modules/api.js";import Comment from"./modules/comments.js";const displayMovies=async()=>{const e=document.getElementById("list-of-shows"),n=document.querySelector(".popup-comments");e.innerHTML="";const t=await fetch(api.moviesApi),o=await t.json();t.ok?o.forEach((t=>{const o=document.createElement("section");o.classList.add("show_items");const s=document.createElement("div");s.classList.add("show_image");const i=document.createElement("div");i.innerHTML=` <img class="movie_image" src="${t.image.medium}" alt="${t.name}">`;const a=document.createElement("div");a.classList.add("actions_name");const c=document.createElement("p");c.innerHTML=`${t.name}`,c.classList.add("movie");const m=document.createElement("div");m.classList.add("icon");const d=document.createElement("span");d.classList.add("clickable"),document.createElement("i").innerHTML='<i class="fa-solid fa-heart"></i>';const r=document.createElement("p");r.innerText="2 Likes";const l=document.createElement("div");l.classList.add("comment-button");const p=document.createElement("button");p.innerText="Comments",p.classList.add("button"),l.append(p),m.append(d,r),a.append(c,m),s.append(i),o.append(s,a,l),e.append(o),p.addEventListener("click",(()=>{n.innerHTML=`\n        <div class="popIt">\n\n        <div class="pop">\n\n          <span class="close-button">&times;</span>\n\n            <div class="popup_image">\n            <img class="pop_image" src="${t.image.medium}" alt="asdf">\n            </div>\n\n               <p class="pop_meal">Name: ${t.name}</p>\n               <p>Ratings: ${t.rating.average}</p>\n               <p class="instructions">Airdate: ${t.airdate}</p>\n               <p>Runtime: ${t.runtime}</p>\n\n                 <div class="comment_count"></div>\n\n          <button class="view_more">Refresh Comments</button>\n         \n          <div class="pop_comment"></div>\n          <div id="commentList"></div>\n\n          <h3 class="add-comm">Add a comment</h3>\n\n          <div class="inputDiv">\n            <form class="form">\n              <input id="name" type="text" name="user" required placeholder="Your Name"><br>\n              <textarea id="text" type="text" name="text" required placeholder="Your insight"></textarea><br>\n              <div>\n                <button class="submit-btn" type="submit">Comment</button>\n              </div>\n            </form>\n           </div>\n\n        </div>\n\n      </div>\n      `,n.style.display="flex",document.body.style.overflow="hidden",document.querySelector(".close-button").addEventListener("click",(()=>{n.style.display="none",document.body.style.overflow="auto"}));const e=document.querySelector(".comment_count"),o=document.querySelector(".pop_comment"),s=async n=>{const t=await fetch(`${api.commentUrl}?item_id=${n}`),s=await t.json();t.ok&&((async e=>{o.innerHTML="";const n=e.map((e=>` <div class="new_list">\n                                                             <strong> <p> ${e.creation_date} </p> </strong>\n                                                              <div class="comment-initials">\n                                                              <p> ${e.username} </p>\n                                                              <p> ${e.comment} </p>\n                                                              </div>\n                                                            </div>\n        `)).join("");o.innerHTML=n})(s),e.innerHTML=`Comments: ${s.length}`)},i=document.querySelector("#name"),a=document.querySelector("#text"),c=document.querySelector(".form");c.addEventListener("submit",(e=>{e.preventDefault(),(async(e,n)=>{const o=new Comment(e,n,t.id);await fetch(api.commentUrl,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(o)})})(document.querySelector("#name").value,document.querySelector("#text").value),i.value="",a.value="",s(t.id)})),c.addEventListener("focusout",(()=>{s(t.id)})),window.addEventListener("mouseover",(()=>{s(t.id)})),document.querySelector(".view_more").addEventListener("click",(()=>{s(t.id)}))}))})):e.innerText="Server Down"};export default displayMovies();