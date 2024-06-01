
function nextGreaterElement(nums1, nums2) {
    const nextGreater = {};
    const stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        const current = nums2[i];

        while (stack.length > 0 && stack[stack.length - 1] <= current) {
            stack.pop();
        }

        nextGreater[current] = stack.length > 0 ? stack[stack.length - 1] : -1;

        stack.push(current);
    }

    return nums1.map(num => nextGreater[num]);
}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
const result = nextGreaterElement(nums1, nums2);
console.log(result);