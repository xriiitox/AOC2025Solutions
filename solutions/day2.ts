import { readFileSync } from 'fs';

const file: string = readFileSync('../inputs/input2.txt', 'utf-8');

const ids = file.split(',')

let sumInvalid: number = 0;

for (let str of ids) {
    let nums: any = str.split('-');
    nums = nums.map(Number);
    // console.log(nums)
    for (let i = nums[0]; i <= nums[1]; i++) {
        let str: string = i.toString();
        // big ahh switch case :skull:
        switch (str.length) {
            case 2:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 3:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 4:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,2).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 5:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 6:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,2).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,3).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 7:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 8:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,2).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,4).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 9:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,3).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
            case 10:
                if (splitStr(str,1).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,2).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                else if (splitStr(str,5).every( (v,i,r) => v === r[0] )) {
                    sumInvalid += i;
                }
                break;
        }
    }
}

console.log(sumInvalid);

function splitStr(str: string, splitBy: number): string[] {

    let chunks = [];

    for (let i = 0, charsLength = str.length; i < charsLength; i += splitBy) {
        chunks.push(str.substring(i, i + splitBy));
    }

    return chunks;
}