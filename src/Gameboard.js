import { myShip, ship } from './Ship.js'

export function gameBoard() {

    const board = [];
    const ships = [];

    const makeField = () => {
        let i,j = 10;

        for ( i = 0; i < 10; i++ ) {
            board[i] = [];
            for( j = 0; j < 10; j++ ) {
                board[i][j] = `${i}${j}`;
            }
        }
    }

    const placeShip = ( ship, cord ) => {
        ships.push(ship);
        for ( let i = 0; i < cord.length; i++ ) {
            let cord1 = parseInt(cord[i].charAt(0));
            let cord2 = parseInt(cord[i].charAt(1));
            board[cord1][cord2] = ship;
        }
    }

    const receiveAttack = ( cord ) => {
        let cord1 = parseInt(cord.charAt(0));
        console.log(cord1);
        let cord2 = parseInt(cord.charAt(1));

        let cell = board[cord1][cord2];

        if ( cell === 'o' || cell === 'x' ) {
            return
        } else if ( cell instanceof ship &&  cell !== 'x' ) {
            cell.hit();
            board[cord1][cord2] = 'x';
        } else {
            if ( cell instanceof ship ) {
                cell.hit();
                board[cord1][cord2] = "x";
                return 'x';
            } else {
                board[cord1][cord2] = "o";
                return 'o';
            }
        }
    }

    const allShipSunk = () => {
        return ships.every( item => item.isSunk );
    }

    return {
        board,
        makeField,
        placeShip,
        receiveAttack,
        allShipSunk
    }
}

const myGameboard = gameBoard();
myGameboard.makeField();

//module.exports = { gameBoard, myGameboard }