var singleNumber = function(nums) {
    let obj = {};
    for(let i=0; i<nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0)+1;
    }
    for(let key in obj) {
        if(obj[key]===1) return Number(key);
    }
}

var singleNumberXor = function(nums) {
    let ans=0;
    for(let i=0; i<nums.length; i++) ans ^= nums[i];
    return ans;
}

let nums = [4,1,2,1,2];
console.log(singleNumber(nums));
console.log(singleNumberXor(nums));