/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const res = [];

    for (let i = 0; i < nums[0].length; i++) {
        if (nums.every((x) => x.includes(nums[0][i]))){
            res.push(nums[0][i]);
        }
    }
    return res.sort((a, b) => a - b)
};