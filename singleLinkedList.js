/* -------- Object Constructors -------- */
function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;
}

/* -------- Add a node to SLL -------- */
function addToList(list, val){
    if (list.head === null){ // if the list.head is null, we can add a new node.
        list.head = new Node(val);
    } else { // if the head is not null, we need to create a runner to find the end
        var runner = list.head; // runner will begin at the head of the list.
        while (runner.next != null){ // while the runner is pointing to something else, we continue through the list.
            runner = runner.next; // this will cause our runner to continue until the last value.
        } // once the runner.next is a null value, we exit our for loop.
        runner.next = new Node(val); // we've added a new node to the end!
    }
    return list;
}

/* -------- Reverse SLL -------- */
    function reverseList(list) {
        if (list.head == null) { // this list is too short
            return {
                status: false
            };
        } else {
            var previous = list.head
        }
    }

/* -------- Find value in SLL -------- */
function findVal(list, num){
    var runner = list.head; // we start our runner at the head of our list.
    while (runner){ // while the runner is not null, we continue.
        if (runner.val === num ){
            return {status: true, result: runner}; // if we find the value we are searching for
        } else {
            runner = runner.next; // if not, we should continue iterating through our list.
        }
    }
    return: {status: false} // if we don't find what we are looking for, then we should return the status = false.
}

/* -------- Find last node -------- */
function findEndNode(list) {
    runner = list.head;
    while (runner.next) {
        runner = runner.next;
    }
    return runner;
}

/* -------- Delete last node -------- */
function deleteLastNode(list) {
    // if our list has only one node, remove it. 
    if (list.head.next == null) {
        list.head = null;
    } else {
        var runner = list.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        runner.next = null;
    }
    return list;
}


/* -------- Check if list is a palindrome -------- */
function palindrome(list) {
    var values = [];
    if (list.head == null) {
        return false;
    } else {
        runner = list.head;
        while (runner) {
            values.push(runner.val);
            runner = runner.next;
        }
        var isPalindrome = true;
        for (var i = 0; i < (values.length / 2); i++) {
            var comp1 = values[i];
            var comp2 = values[(values.length - 1) - i];
            if (comp1 !== comp2) {
                isPalindrome = false;
            }
        }
        return isPalindrome;
    }
}

/* -------- Find Nth to the last node -------- */
function Kth_Last_Node(list, num) {
    if (!list.head || num <= 0)
        return undefined;

    var runner = list.head;
    var counter = 0;

    while (runner.next) {
        runner = runner.next;
        counter++;
    }

    if (num > counter)
        return undefined;

    var target = counter - num + 1;
    counter = 0;
    runner = list.head;

    while (counter < target) {
        runner = runner.next;
        counter++;
    }

    return runner.val;
}


/* -------- To do list-------- */
// - Print all values in a list