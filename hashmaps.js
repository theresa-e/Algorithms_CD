/* -------- Object constructor -------- */

function HashMap(capacity){
    this.table = [];
    this.table.length = capacity; // sets table with length. 
    this.capacity = capacity; // length of hash table. 
}

/* -------- Hashcode function -------- */
String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i=0; i<this.length; i++){
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char; 
    }
    return hash;
}

/* -------- Add key, value to hashmap -------- */
HashMap.prototype.add = function(key, val){
    var hashedKey = key.hashCode(); // hash the key
    var idx = hashCode % this.capacity; // find which index it belongs to
    var arrAtIdx = this.table[idx];
    if (!arrayAtIdx || arrayAtIdx.length <= 0){
        arrAtIdx = [hashedKey, val]; // if there are no arrays at that index, we'll place ours there.
    }
    var found
}

