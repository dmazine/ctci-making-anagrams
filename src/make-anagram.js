'use strict'

function makeAnagram(a, b) {
    let arr = new Array(26).fill(0);

    console.log(arr);
    
    for (let index = 0; index < a.length; index++) {
        arr[a.charCodeAt(index) - 97]++;
    }

    console.log(arr);
    
    for (let index = 0; index < b.length; index++) {
        arr[b.charCodeAt(index) - 97]--;
    }

    console.log(arr);
    
    let deleteCount = 0;

    for (let index = 0; index < arr.length; index++) {
        deleteCount += Math.abs(arr[index]);
    }
    
    return deleteCount;
}

module.exports = makeAnagram;
