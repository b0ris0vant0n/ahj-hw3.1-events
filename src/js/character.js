export default class Character {
    constructor(elem) {
      this.cell = elem.querySelectorAll(".grid-cell");
    }

    randomPosition() {
      const goblin = document.createElement('img');
      goblin.classList.add('grid-cell__img');
      goblin.src = 'https://github.com/b0ris0vant0n/ahj-hw3.1-events/blob/main/src/img/goblin.png?raw=true';

      let previous = 0;
      let i = 0;
  
      setInterval(() => {
        while (i === previous) {
          i = Math.floor(Math.random() * (this.cell.length - 1));
        }
  
        previous = i;
        this.cell[i].appendChild(goblin);
      }, 1000);
    }
  }