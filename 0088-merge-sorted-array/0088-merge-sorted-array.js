/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
   let j = 0
    for (let i = 0; i < m + n; i++) {
        if (nums2[j] <= nums1[i]) {
            nums1.splice(i, 0, nums2[j])
            j++
        }
    }
    
    while (m + j < m + n) {
        nums1.splice(m + j, 0, nums2[j])
        j++
    }
    
    nums1.splice(m + n, m + (2 * n))
    return nums1
};
