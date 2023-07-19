import gameOver from './game-over.js'

export default function userClick(position) {
    const playingItemsCollection = document.querySelectorAll('.grid-cell')

    const userPoints = document.querySelector('.user-got-points__number')

    const userMisses = document.querySelector('.user-got-misses__number')

    userMisses = 0

    for (const playingItem of playingItemsCollection) {
      playingItem.addEventListener('click', (e) => {
          if (e.target.className === 'icon') {
            userPoints.textContent = +userPoints.textContent + 1
          } else {
            userMisses++
            userMisses.textContent = +userMisses.textContent + 1
            if (userMisses >= 5) {
                gameOver();
                clearTimeout(position);
            }
          }
      })
    }
}