import './style.css';
import api from './modules/api.js';

const displayMovies = async () => {
  const listOfMovies = document.getElementById('list-of-shows');
  const popup = document.querySelector('.popup-comments');

  listOfMovies.innerHTML = '';

  const response = await fetch(api.moviesApi);
  const data = await response.json();
  if (!response.ok) {
    listOfMovies.innerText = 'Server Down';
    return;
  }
  data.forEach((item) => {
    const section = document.createElement('section');
    section.classList.add('show_items');
    const divImg = document.createElement('div');
    divImg.classList.add('show_image');

    const movieImg = document.createElement('div');
    movieImg.innerHTML = ` <img class="movie_image" src="${item.image.medium}" alt="${item.name}">`;
    const twoDiv = document.createElement('div');
    twoDiv.classList.add('actions_name');
    const movieName = document.createElement('p');
    movieName.innerHTML = `${item.name}`;
    movieName.classList.add('movie');

    const divIcon = document.createElement('div');
    divIcon.classList.add('icon');

    const spanClick = document.createElement('span');
    spanClick.classList.add('clickable');

    const likes = document.createElement('i');
    likes.innerHTML = '<i class="fa-solid fa-heart"></i>';

    const countLikes = document.createElement('p');
    countLikes.innerText = '2 Likes';

    const commentBtn = document.createElement('div');
    commentBtn.classList.add('comment-button');
    const btn = document.createElement('button');
    btn.innerText = 'Comments';
    btn.classList.add('button');

    commentBtn.append(btn);
    divIcon.append(spanClick, countLikes);
    twoDiv.append(movieName, divIcon);
    divImg.append(movieImg);
    section.append(divImg, twoDiv, commentBtn);

    listOfMovies.append(section);

    // adding event listener to the button
    btn.addEventListener('click', () => {
      const pop = () => {
        popup.innerHTML = `
        <div class="popIt">
        <div class="flex pop column">
          <span class="close-button">&times;</span>
          <div class="popup_image">
            <img class="pop_image" src="${item.image.medium}" alt="asdf">
          </div>
          <p class="pop_meal">Name: ${item.name}</p>
          <p>Ratings: ${item.rating.average}</p>
          <p class="instructions">Airdate: ${item.airdate}</p>
          <p>Runtime: ${item.runtime}</p>
          <div class="comment_count"></div>
          <button class="view_more">Refresh Comments</button>
          <div class="pop_comment"></div>
          <div id="commentList"></div>
          <h3 class="add-comm">Add a comment</h3>
          <div class="inputDiv">
            <form class="form">
              <input id="name" type="text" name="user" required placeholder="Your Name"><br>
              <textarea id="text" type="text" rows="6" name="text" required placeholder="Your insight"></textarea><br>
              <div>
                <button class="submit-btn" type="submit">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      `;
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      };
      pop();
    });
  });
};
displayMovies();