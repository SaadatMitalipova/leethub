
var increasingBST = function(root) {
    const result = new TreeNode();
    let pointer = result;
    const inorderTraversal = (node) => {
        if (!node) return;
        inorderTraversal(node.left);
        pointer.right = new TreeNode(node.val);
        pointer = pointer.right;
        inorderTraversal(node.right);
    };
    inorderTraversal(root);
    return result.right;
};