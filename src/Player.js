import { gameBoard } from './Gameboard.js'

export function player( type ) {

    let board = null;

    const setPlayerBoard = () => board = gameBoard();

    const getPlayerBoard = function() { return board };

    const playerType = type;

    let playerTurn = false;

    return {
        playerTurn,
        setPlayerBoard,
        getPlayerBoard
    }

}