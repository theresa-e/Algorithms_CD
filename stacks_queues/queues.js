/* -------- Object Constructors -------- */
function SLQ(){
    this.head = null;
    this.tail = null; 
}

function Node(val){
    this.val = val;
    this.next = null;
}

/* -------- Add to a queue -------- */
function addToQueue(list, val){
    if (list.head == null){ // If list.head is null, we don't have a first node.
        list.head = new Node(val); // Instantiate a first/new node.
        list.tail = list.head; // Set value of tail as list.head (beginning and end)
    } else {
        var addedNode = new Node(val); // Instantiate a new node and store in variable. 
        list.tail.next = addedNode; // Have next point to the new node (it's been added to our queue)
        list.tail = addedNode; // Set tail to new node 
    }
    return list;
}

/* -------- Remove from a queue -------- */
function removeFromQueue(list){
    if (!list.head){ // If the head is not pointing to a node we return null. 
        return {status: null}; // Function will return same data type either way -- an object. 
    } else {
        var removedNode = list.head;
        console.log('This node was removed: ', removedNode);
        list.head = list.head.next; // If list.head is pointing to a node, we want to remove it. 
        }
    return list;
}

var mySLQ = new SLQ ();
addToQueue(mySLQ, 14);
addToQueue(mySLQ, 24);
addToQueue(mySLQ, 64);
addToQueue(mySLQ, 34);
addToQueue(mySLQ, 87);