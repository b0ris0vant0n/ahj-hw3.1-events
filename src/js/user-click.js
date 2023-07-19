import gameOver from './game-over.js'

export default function userClick(position) {
    const playingItemsCollection = document.querySelectorAll('.grid-cell')

    const userPoints = document.querySelector('.user-got-points__number')

    let userMisses = document.querySelector('.user-got-misses__number')


    for (const playingItem of playingItemsCollection) {
      playingItem.addEventListener('click', (e) => {
          if (e.target.className === 'icon') {
            userPoints.textContent = +userPoints.textContent + 1
          } else {
            userMisses.textContent = +userMisses.textContent + 1
            if (+userMisses.textContent >= 5) {
                gameOver();
                clearTimeout(position);
            }
          }
      })
    }
}