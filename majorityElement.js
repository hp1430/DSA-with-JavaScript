function majorityElement(nums) {
    let count=0;
    let ans;
    for(let i=0; i<nums.length; i++) {
        if(count===0) ans=nums[i];
        count += (ans===nums[i]) ? 1 : -1;
    }
    return ans;
}

let nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));