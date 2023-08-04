export default function gameOver() {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = `<span>Вы промахнулись 5 раз. GAME OVER</span>`
    document.querySelector('body').appendChild(modal);
 }