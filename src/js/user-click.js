import gameOver from './game-over.js'

export default class Game {
  constructor(goblin) {
    this.goblin = goblin
    this.playingBoard = document.getElementById('cells')
    this.cell = document.querySelectorAll(".grid-cell");
    this.showGoblin = null
  }

  init() {
    this.playingBoard.addEventListener('click', this.userClick.bind(this))
    this.randomPosition()
  }

  userClick(event) {
    event.preventDefault()
    this.userPoints = document.querySelector('.user-got-points__number')
    this.userMisses = document.querySelector('.user-got-misses__number')
    if (event.target.className === 'grid-cell__img') {
        this.userPoints.textContent = +this.userPoints.textContent + 1
      } else {
        this.userMisses.textContent = +this.userMisses.textContent + 1
        if (+this.userMisses.textContent >= 5) {
          gameOver();
          }
      }
  }

  randomPosition () {
      let previous = 0;
      let i = 0;
    
      setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * (this.cell.length - 1));
        }
    
        previous = i;
        this.deletedGoblin()
        this.i = i
        this.showGoblin = this.goblin.getGoblin()
        this.cell[i].appendChild(this.showGoblin);

      }, 1000);
      }

  deletedGoblin() {
    if (this.showGoblin === null) {
      return;
    }
    this.cell[this.i].firstChild.remove();
  }
} 