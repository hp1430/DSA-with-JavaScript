function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
function reverse(nums) {
    let i=0, j=nums.length-1;
    while(i<j) {
        swap(nums, i, j);
        i++;
        j--;
    }
    return nums;
}

let nums = [5,9,1,8,2,3];
let result = reverse(nums);
console.log(result);