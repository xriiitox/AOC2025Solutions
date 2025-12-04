import {readFileSync} from 'fs';

const file: string[] = readFileSync('../inputs/input3.txt', 'utf-8').split("\n");
// console.log(file);
let sumJolts = 0;
function solutionOne() {
    file.forEach(bank => {
        let largest = 0;
        let largestIndex = -1;
        let nextLargest = 0;
        for (let i = 0; i < bank.length; i++) {
            const currentJolt = Number(bank[i]);
            if (currentJolt > largest) {
                largest = currentJolt;
                largestIndex = i;
            }
            if (currentJolt === 9) break;
        }
        if (largestIndex === bank.length - 1) {
            for (let j = 0; j < bank.length - 1; j++) {
                const currentJolt = Number(bank[j]);
                if (currentJolt > nextLargest) {
                    nextLargest = currentJolt;
                }
            }
            sumJolts += nextLargest * 10 + largest;
        } else {
            for (let j = largestIndex + 1; j < bank.length; j++) {
                const currentJolt = Number(bank[j]);
                if (currentJolt > nextLargest) {
                    nextLargest = currentJolt;
                }
            }
            sumJolts += largest * 10 + nextLargest;
        }
    })
}
function solutionTwo() {
    file.forEach(bank => {
        let final = "";
        let startInd = 0
        for (let i = 11; i >= 0; i--) {
            let shortened = [...bank].map(x => Number(x)).slice(0, bank.length - i);
            let largest = 0;
            for (let j = startInd; j < shortened.length; j++) {
                if (i != 11 && j === startInd) continue;
                // @ts-ignore
                const currentJolt: number = shortened[j];
                if (currentJolt > largest) {
                    largest = currentJolt;
                    startInd = j;
                }
            }
            final += String(largest);

        }
        sumJolts += Number(final);
    })
}
// solutionOne();
solutionTwo();
console.log(sumJolts)