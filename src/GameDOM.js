import "./styles.css";
import { attack } from './GameController.js'

export function renderCells( player1, player2 ) {

    const player1DOMBoard = document.querySelector('.left-player-board');
    const player2DOMBoard = document.querySelector('.right-player-board');

    let player1Board = player1.getPlayerBoard();
    let player2Board = player2.getPlayerBoard();

    let player1Cells = player1.getPlayerBoard().board;
    let player2Cells = player2.getPlayerBoard().board;

    player1Cells.forEach( row => {
        row.forEach(  cell => { 
            // create DOM cell
            let domCell = document.createElement('div');
            domCell.className = 'cell';
            domCell.id = `${cell}1`;
            player1DOMBoard.appendChild(domCell);

            //add eventListener
            domCell.addEventListener( 'click', function( domCell ) {
                let targetCell = attack( player1Board, `${domCell.target.id}` );
                console.log( targetCell );
                if ( targetCell === 'o')
                    domCell.target.textContent = 'o';
                else if ( targetCell === 'x' )
                    domCell.target.textContent = 'x';
            })
        })
    });

    player2Cells.forEach( row => {
        row.forEach(  cell => { 
            let domCell = document.createElement('div');
            domCell.className = 'cell';
            domCell.id = `${cell}2`;
            player2DOMBoard.appendChild(domCell);

            //add eventListener
            domCell.addEventListener( 'click', function( domCell ) {
                let targetCell = attack( player2Board, `${domCell.target.id}` );
                console.log( targetCell );
                if ( targetCell === 'o')
                    domCell.target.textContent = 'o';
                else if ( targetCell === 'x' )
                    domCell.target.textContent = 'x';
            })
        })
    });
}