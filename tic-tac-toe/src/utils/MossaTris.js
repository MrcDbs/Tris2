
const setPosition = (horizontal, vertical, symbol, matrix) => {
    if (symbol === 'x' && matrix[horizontal][vertical] === 0) {
        matrix[horizontal][vertical] = 1;
    }
    else if (symbol === 'o' && matrix[horizontal][vertical] === 0) {
        matrix[horizontal][vertical] = -1;
    }

}

const checkWinner = (result, matrix) => {
    let sum;
    let diagonal = [];
    for (let i = 0; i < 3; i++) {
        sum = 0;
        for (let j = 0; j < 3; j++) {

            sum += matrix[i][j];

        }
        //console.log('HORIZONTAL SUM IS ', sum);
        if (sum === result) {
            if (i === 0) {
                diagonal = ['a', 'b', 'c'];
            } else if (i === 1) {
                diagonal = ['d', 'e', 'f'];
            } else {
                diagonal = ['g', 'h', 'i'];
            }
            return {
                sum: sum,
                diagonal: diagonal
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        sum = 0;
        for (let j = 0; j < 3; j++) {

            sum += matrix[j][i];
        }
        //console.log('VERTICAL SUM IS ', sum);
        if (sum === result) {
            if (i === 0) {
                diagonal = ['a', 'd', 'g'];
            } else if (i === 1) {
                diagonal = ['b', 'e', 'h'];
            } else {
                diagonal = ['c', 'f', 'i'];
            }
            return {
                sum: sum,
                diagonal: diagonal
            }
        }
    }
    if (matrix[0][0] + matrix[1][1] + matrix[2][2] === result) {
        return {
            sum: result,
            diagonal: ['a', 'e', 'i']
        };
    } else if (matrix[0][2] + matrix[1][1] + matrix[2][0] === result) {
        return {
            sum: result,
            diagonal: ['c', 'e', 'g']
        };
    }
    return {
        sum: 0,
        diagonal: null
    };
}

const mossaComputer = (simbolo, griglia) => {
    let s = simbolo === 'x' ? 'o' : 'x';
    for (let key of griglia) {

    }
}

export { setPosition, checkWinner, mossaComputer };