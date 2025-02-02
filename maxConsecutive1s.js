var maxConsecutive1s = function(nums) {
    let ans = 0, count = 0;
    for(let num of nums) {
        if(num==1) {
            count+=1;
        }
        else {
            count = 0;
        }
        ans = Math.max(ans, count);
    }
    return ans;
}

let nums = [1,1,0,1,1,1];
console.log(maxConsecutive1s(nums));