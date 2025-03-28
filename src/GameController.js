import { ship } from './Ship.js'
import { gameBoard } from './Gameboard.js'
import { player } from './Player.js'
import { renderCells } from './GameDOM.js'

const player1 = player('real');
const player2 = player('computer');

export function initializeCells() {
    player1.setPlayerBoard();
    player2.setPlayerBoard();

    player1.getPlayerBoard().makeField();
    player2.getPlayerBoard().makeField();

    renderCells( player1, player2 );
    addShips( player1, player2 );

}



export function attack( playerBoard, cord ) {
    return playerBoard.receiveAttack( cord );
}