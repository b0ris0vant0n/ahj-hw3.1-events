import gameOver from './game-over.js';

export default function userClick(timerId) {
    const playingItemsCollection = document.querySelectorAll('.grid-cell');

    const userPoints = document.querySelector('.user-got-points__number');

    let userFailPoints = 0;

    for (const playingItem of playingItemsCollection) {
      playingItem.addEventListener('click', (e) => {

          if (e.target.className === 'icon') {
            userPoints.textContent = +userPoints.textContent + 1;
          } else {
            userFailPoints++;
            console.log(userFailPoints);
            if (userFailPoints >= 5) {
                gameOver();
                clearTimeout(timerId);
            }
          }
      })
    }
}