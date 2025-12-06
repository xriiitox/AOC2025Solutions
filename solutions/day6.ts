import {readFileSync} from 'fs';

const file: string[] = readFileSync('../inputs/input6.txt', 'utf-8').split("\n");

function part1() {
    let totSum = 0
    let nums1 = file[0].split(/\s+/)
    let nums2 = file[1].split(/\s+/)
    let nums3 = file[2].split(/\s+/)
    nums3 = nums3.filter(n => n !== "")
    let nums4 = file[3].split(/\s+/)
    nums4 = nums4.filter(n => n !== "")
    let ops = file[4].split(/\s+/)

    for (let i = 0; i < nums1.length; i++) {
        switch (ops[i]) {
            case "+":
                totSum += Number(nums1[i]) + Number(nums2[i]) + Number(nums3[i]) + Number(nums4[i])
                break;
            case "*":
                totSum += Number(nums1[i]) * Number(nums2[i]) * Number(nums3[i]) * Number(nums4[i])
                break;
            default:
                console.log("weird error")
        }
    }
    console.log(totSum)
}

function part2() {

}

// part1()
part2()