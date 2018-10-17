// Object Constructor
function HashMap(capacity){
    this.table = [];
    this.table.length = capacity; // sets table with length. 
    this.capacity = capacity; // length of hash table. 
}

// Hashcode function --> Each time a key-value pair is added,
// we'll generate a hashCode to determine which index it belongs in.
// All Strings will have access to this method (thank you, prototype!).
String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) {
        return hash;
    } else {
        for (i=0; i<this.length; i++){
            char = this.charCodeAt(i);
            hash = ( (hash<<5) - hash) + char; 
        }
    }
    return hash;
}

// Add to hashmap
// hashedKey is the index where 
HashMap.prototype.add = function(key, val){
    var hashedKey = key.hashCode(); // hash the key
    if (!this.table[hashedKey]) {
        this.table[hashedKey] = [[key, value]];
    } else {
        for (var i=0; i < this.table[hashedKey].length; i++) {

        }
    }

}

