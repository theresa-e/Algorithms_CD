/* -------- Object Constructors -------- */
function BST() {
    this.root = null;
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/* -------- Add a value to BST -------- */
BST.prototype.addNode = function (val) {
    if (this.root == null) {
        this.root = new BST.prototype.Node(val);
        return;
    } else {
        var newNode = new Node(val);
        var runner = this.root
        while (runner) {
            if (val <= runner.val) {
                if (runner.left) {
                    runner = runner.left;
                } else {
                    runner.left = newNode;
                    return this;
                }
            } else {
                if (runner.right) {
                    runner = runner.right;
                } else {
                    runner.right = newNode;
                    return this;
                }
            }
        }
    }
}

/* -------- Remove node with value from BST -------- */
BST.prototype.removeNode = function (BST, val) {
    if (this.root == null) { // if the tree is empty, we return null.
        return null;
    }
    if (this.root.val < val) { // if the value is less than the root val, we go left. 
        this.root.left = BST.prototype.removeNode(this.root.left, val);

    } else if (this.root.val > val) { // if the value is greater than the root val, we go right.
        this.root.left = BST.prototype.removeNode(this.root.left, val);
    } else {
        if (this.root.left == null) {
            temp = root.right;
            this.root = temp;
        }
    }
}


/* -------- Traversal -------- */

// PreOrder
BST.prototype.preOrderTraversal = function () {
    if (this.root == null) {
        return null;
    } else {
        var traversePreorder = function (node) {
            nodes.push(node.val);
            if (node.left) {
                traversePreorder(node.left);
            }
            if (node.right) {
                traversePreorder(node.right);
            }
        }
        // store values in a stack
        var nodes = [];
        traversePreorder(this.root);
        return nodes;
    }
}

BST.prototype.inOrderTraversal = function () {
    if (this.root == null) {
        return null;
    } else {
        var traverseInOrder = function(node) {
            if (node.left) {
                traverseInOrder(node.left);
            } if (node.right) {
                traverseInOrder(node.right);
            }
            nodes.push(node.val)
        }
        var nodes = [];
        traverseInOrder(this.root);
        return nodes;
    }
}

var myBST = new BST()
myBST.root = new Node(1)
myBST.addNode(2)
myBST.addNode(4)
myBST.preOrderTraversal()