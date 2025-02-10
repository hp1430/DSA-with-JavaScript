function printSubarrays(nums) {
    for(let i=0; i<nums.length; i++) {
        let s = "";
        for(let j=i; j<nums.length; j++) {
            s += nums[j]+" ";
            console.log(s);
        }
    }
}

let nums = [1,2,3,4];
printSubarrays(nums);