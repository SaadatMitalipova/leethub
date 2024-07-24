/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = []
    let start = nums[0]
    for(let i=1; i <= nums.length; i++){
       if(nums[i] - nums[i-1] == 1) continue
       if(start == nums [i-1]){
       res.push(`${start}`)
       } else {
         res.push(`${start}->${nums[i-1]}`)
       }
       start = nums[i]
    }
    return res
};