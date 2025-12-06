import {readFileSync} from 'fs';

const file: string[] = readFileSync('../inputs/input5.txt', 'utf-8').split("\n");
let ranges: number[][] = []

function part1() {
    let fresh = 0;
    let i = 0;
    while (file[i].includes("-")) {
        let both = file[i].split("-")
        let realBoth = [Number(both[0]), Number(both[1])]
        ranges.push(realBoth)
        i++;
    }

    if (file[i] == "\n") i++;

    while (i < file.length) {
        for (let r of ranges) {
            if (r[0] <= file[i] && r[1] >= file[i]) {
                fresh++;
                break;
            }
        }
        i++
    }
    console.log(fresh)
}

function part2() {
    let sortedRanges = structuredClone(ranges).sort((a, b) => a[0] - b[0]);

    let uniqueRanges = []
    uniqueRanges.push(sortedRanges[0])

    for (let i = 1; i < sortedRanges.length; i++) {
        let lastRange = uniqueRanges[uniqueRanges.length-1];
        let current = sortedRanges[i];

        if (current[0] <= lastRange[1]) {
            lastRange[1] = Math.max(lastRange[1], current[1]);
        } else {
            uniqueRanges.push(current)
        }
    }
    let totUnique = 0;
    for (let r of uniqueRanges) {
        totUnique += r[1] - r[0] +1
    }
    console.log(totUnique)
}

part1()
part2()