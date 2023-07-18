import gameOver from './game-over.js';

export default function userClick(position) {
    const playingItemsCollection = document.querySelectorAll('.grid-cell');

    const userPoints = document.querySelector('.user-got-points__number');

    let userFailPoints = 0;

    for (const playingItem of playingItemsCollection) {
      playingItem.addEventListener('click', (e) => {
          if (e.target.className === 'icon') {
            playingItem.classList.add('cursor')
            userPoints.textContent = +userPoints.textContent + 1;
          } else {
            userFailPoints++;
            console.log(userFailPoints);
            if (userFailPoints >= 5) {
                gameOver();
                clearTimeout(position);
            }
          }
      })
    }
}