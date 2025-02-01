let freqMap = {};

function countFrequency(str){
    for(let char of str) {
        if(freqMap[char]) {
            freqMap[char]++;
        }
        else {
            freqMap[char]=1;
        }
    }
}

countFrequency("javascript");
console.log(freqMap);