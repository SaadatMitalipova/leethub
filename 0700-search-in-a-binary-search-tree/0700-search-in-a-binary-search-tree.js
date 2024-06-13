function searchBST(root, val) {
    if (root === null || root.val === val) {
        return root;
    }

    if (val < root.val) {
        return searchBST(root.left, val);
    }

    return searchBST(root.right, val);
}
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

let result = searchBST(root, 2);
console.log(result);
