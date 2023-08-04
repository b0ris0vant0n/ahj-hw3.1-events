import gameOver from './game-over.js'

export default function userClick(timeout) {
    const playingItemsCollection = document.querySelectorAll('.grid-cell')

    const userPoints = document.querySelector('.user-got-points__number')

    let userMisses = document.querySelector('.user-got-misses__number')

    document.getElementById('cells').addEventListener('click', event => {
      if (event.target.className === 'grid-cell__img') {
        userPoints.textContent = +userPoints.textContent + 1
        clearInterval(timeout);
        timeout = null;
      } else {
        userMisses.textContent = +userMisses.textContent + 1
        if (+userMisses.textContent >= 5) {
          gameOver();
          clearInterval(timeout);
          }
      }
    })
    }