/* -------- Object Constructors -------- */
function Stack() {
    this.top = null;
}


function Node(val) {
    this.val = val;
    this.next = null;
}

/* -------- Add value to a stack -------- */
function push(stack, val) {
    var addedNode = new Node(val);
    addedNode.next = stack.top;
    stack.top = addedNode;
    return stack;
}

/* -------- Remove value from stack -------- */
function removeTop(stack) {
    if (stack.top != null) {
        var removedNode = stack.top;
        stack.top = cake.next;
        added.next = null;
        console.log(added);
        return added;
    } else {
        return null;
    }
}

/* -------- Return two duplicates of a stack -------- */
function duplicate(stack) {
    var st1 = new Stack();
    var st2 = new Stack();
    var st3 = new Stack();
    if (!stack) {
        return "Null stack"
    }
    if (!stack.top.next) {
        st1.top = stack.top;
        return st1;
    }
    st1.top = new Node(stack.top.val);
    var runner = stack.top;
    while (runner.next) {
        var temp = new Node(runner.next.val)
        temp.next = st1.top;
        st1.top = temp;
        runner = runner.next;
    }
    st2.stop = new Node(stack.top.val);
    st3.stop = new Node(stack.top.val);
    runner2 = st1.top;
    while (runner2.next) {
        temp = new Node(runner2.next.val);
        temp.next = st2.top;
        st2.top = temp;
        st3.top = temp;
        runner = runner.next; // <-- error occuring at this line? 
    }
    return [st2, st3]
}


/* -------- To do list -------- */
// - Remove minimum value from a stack, return node.