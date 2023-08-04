export default class Character {
  constructor () {
    this.goblin = undefined
  }

  createGoblin() {
    const goblin = document.createElement('img');
    goblin.classList.add('grid-cell__img');
    goblin.src = 'https://github.com/b0ris0vant0n/ahj-hw3.1-events/blob/main/src/img/goblin.png?raw=true';
    this.goblin = goblin
  }

  getGoblin() {
    this.createGoblin()
    return this.goblin
  }
}