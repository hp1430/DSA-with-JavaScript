function intersectionOfTwoArrays(nums1, nums2) {
    let freqMap1 = {};
    for(let i=0; i<nums1.length; i++) {
        freqMap1[nums1[i]] = (freqMap1[nums1[i]] || 0)+1;
    }
    let freqMap2 = {};
    for(let i=0; i<nums2.length; i++) {
        if(freqMap1[nums2[i]]) {
            freqMap2[nums2[i]] = (freqMap2[nums2[i]] || 0)+1;
        }
    }
    return Object.keys(freqMap2).map(Number);
}

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];
console.log(intersectionOfTwoArrays(nums1, nums2));