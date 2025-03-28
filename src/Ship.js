
export function ship(len) {

    const length = len;
    let hits = 0;

    const isSunk = () => {
        return hits === length ? true : false;
        };

    const hit = () => hits++;

    return {
        hit, isSunk
    }
}

const myShip = ship(3);


//module.exports = { ship, myShip }