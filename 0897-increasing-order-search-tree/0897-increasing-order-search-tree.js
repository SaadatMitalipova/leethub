class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function increasingBST(root) {
    const nodes = [];

    // In-order traversal to collect nodes
    function inOrder(node) {
        if (node === null) return;
        inOrder(node.left);
        nodes.push(node);
        inOrder(node.right);
    }

    inOrder(root);

    // Rebuild tree from collected nodes
    const dummy = new TreeNode(0);
    let current = dummy;
    for (const node of nodes) {
        node.left = null; // Remove the left child
        current.right = node;
        current = current.right;
    }

    return dummy.right;
}

// Вспомогательная функция для построения дерева из массива
function buildTreeFromArray(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) return null;
    const root = new TreeNode(arr[i]);
    root.left = buildTreeFromArray(arr, 2 * i + 1);
    root.right = buildTreeFromArray(arr, 2 * i + 2);
    return root;
}

// Вспомогательная функция для печати дерева
function printTree(node) {
    const result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.right;
    }
    console.log(result);
}

// Пример использования
const root = buildTreeFromArray([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]);

const newRoot = increasingBST(root);

printTree(newRoot); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

