import {readFileSync} from 'fs';

let file: string[] = readFileSync('../inputs/input4.txt', 'utf-8').split("\n");

function countNeighbors(i: number, j: number) {
    let count = 0;
    const listToCheck = [
        [-1, -1], [0, -1], [1, -1],
        [-1, 0],           [1, 0],
        [-1, 1], [0, 1], [1, 1]
    ]

    for (const coord of listToCheck) {
        let dx = coord[0];
        let dy = coord[1];

        try {
            if (file[i + dx][j + dy] === "@") {
                count++;
            }
        } catch (e) {
            continue;
        }
    }
    return count;
}

function part1() {
    let rolls = 0;
    for (let i = 0; i < file.length; i++) {
        for (let j = 0; j < file[i].length; j++) {
            if (file[i][j] !== "@") continue;
            if (countNeighbors(i,j) < 4) rolls++;
        }
    }
    return rolls;
}

function part2() {
    let removedTotal = 0;
    let hasModified = false
    do {
        hasModified = false;
        let removedInPass = 0;
        let modifiedFile: string[] = JSON.parse(JSON.stringify(file))
        for (let i = 0; i < file.length; i++) {
            for (let j = 0; j < file[i].length; j++) {
                if (file[i][j] === ".") continue;
                if (countNeighbors(i, j) < 4) {
                    let charArr = file[i].split('')
                    charArr[j] = '.';
                    modifiedFile[i] = charArr.join('')
                    removedInPass++;
                    hasModified = true
                }
            }
        }
        removedTotal += removedInPass;
        file = JSON.parse(JSON.stringify(modifiedFile))
    } while (hasModified)
    return removedTotal
}
console.log(part2())