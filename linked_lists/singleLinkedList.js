// -------- Constructors -----------
function Node(val) {
    this.val = val;
    this.next = null;
}

function SLL() {
    this.head = null;
}

// -------- Add to end of SLL -----------
SLL.prototype.add = function (val) {
    // Early termination:
    // If the head is null, then there are no nodes present.
    // We can create a new node and set it as a the head.
    if (this.head == null) {
        this.head = new Node(val)
    } else {
        // If head is not null, we need to traverse the list to find the end.
        var runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
    }
    // After we locate the end of the list, we will add the new node. 
    runner.next = new Node(val)
}

// -------- Reverse a SLL -----------
SLL.prototype.reverse = function () {
    // Early termination:
    // If there is only one node, we do not need to reverse it.
    if (!this.head.next) {
        return this.head;
    } else {
        // Otherwise we need to change the pointers to point in the
        // opposite direction.
        var previous = this.head;
        var current = previous.next;
        while (current) {
            // Temp variable will store next (so we don't lose it!)
            var temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
    }
    this.head = prev
}

// -------- Find node containing a val -----------
SLL.prototype.findVal = function(list, num) {
    var runner = list.head; // we start our runner at the head of our list.
    while (runner) { // while the runner is not null, we continue.
        if (runner.val === num) {
            return {
                status: true,
                result: runner
            }; // if we find the value we are searching for
        } else {
            runner = runner.next; // if not, we should continue iterating through our list.
        }
    }
    return {
        // if we don't find what we are looking for, then we should return the status = false.
        status: false
    } 
}

// -------- Find last node -----------
SLL.prototype.findEndNode = function(list) {
    runner = list.head;
    while (runner.next) {
        runner = runner.next;
    }
    return runner;
}

// -------- Delete last node -----------
SLL.prototype.deleteLastNode = function(list) {
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

// -------- Delete a node with a given val -----------
SLL.prototype.delete = function(val) {
    if (this.head == null){
        return false;
    }
    if (this.head.val == val) {
        // set the head to point to next.
        // The first value in the list is the one we were looking for!
        list = this.head.next
    } else {
        var runner = list
        var previous = null
        while (runner) {
            if (runner.val == val) {
                // found the value.
                // we'll point the previous node to the node ahead
                previous.next = runner.next;
                return true;
            } else {
                // haven't found the value yet. keep traversing the list.
                previous = runner;
                runner = runner.next;
            }
        }
        // value was not found --> return false
        return false;
    }
}

// -------- Check if list is a palindrome -----------
SLL.prototype.palindrome = function() {
    var values = [];
    if (this.head == null) {
        return false;
    } else {
        runner = this.head;
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

// -------- Find nth to the last node -----------
SLL.prototype.kthLastNode = function(list, num) {
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