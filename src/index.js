import "./styles.css";
import { attack, initializeCells } from './GameController.js'

const cells = document.querySelectorAll('.cell');

cells.forEach( cell => { cell.addEventListener('click', function(cell) {
    let targetCell = attack(`${cell.target.id}`);
    console.log(targetCell);
    if ( targetCell === 'o')
        cell.target.textContent = 'o';
    else if ( targetCell === 'x' )
        cell.target.textContent = 'x';
})})

function populatePlayerBoard() {
    initializeCells();
}

populatePlayerBoard();
