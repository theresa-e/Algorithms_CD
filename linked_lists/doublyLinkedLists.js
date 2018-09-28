/* -------- Object Constructors -------- */
function DLL() {
    this.head = null;
}

function Node(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

/* -------- Add to DLL -------- */
function addToList(list, val) {
    if (list.head === null) {
        list.head = new Node(val);
    } else {
        var runner = list.head;
        while (runner.next !== null) {
            runner.next.prev = runner;
            runner = runner.next;
        }
        var prevNode = runner.next;
        runner.next = new Node(val);
        runner.next.prev = prevNode;
    }
    return list;
}

var myDLL = new DLL();

addToList(myDLL, 1);
addToList(myDLL, 2);
addToList(myDLL, 3);
addToList(myDLL, 4);
addToList(myDLL, 5);