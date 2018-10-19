

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  //[index: [[k,v][k2,v2]], index2: []]
};

HashTable.prototype.insert = function(k, v) {
  //check the limit and current storage;

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [[k, v]];
    this._storage.set(index, bucket);
    this._count++;
  } else if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i].splice(1, 1, v);
      } else {
        bucket.push([k, v]);
        this._count++;
      }
    }
  }

  if (bucket.length > 1) {
    return 'There is a conflict at index ' + index;
  }

};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(n)
*/
