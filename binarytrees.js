/* -------- Object Constructors -------- */
function BST(){
    this.root = null;
}

BST.prototype.Node = function(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

/* -------- Add a value to BST -------- */
BST.prototype.addNode = function(val){
    if (this.root == null){ 
        this.root = new BST.prototype.Node(val); 
        return this;
    } else {
        var newNode = new BST.prototype.Node(val);
        var runner = this.root
        while (runner){ 
            if (val <= runner.val){
                if (runner.left){
                    runner = runner.left;
                } else {
                    runner.left = newNode;
                    return this;
                }
            } else { 
                if (runner.right){ 
                    runner = runner.right;
                } else {
                    runner.right = newNode;
                    return this;
                }
            }
        }
    }
}

/* -------- To do list -------- */
// - Delete from a BST