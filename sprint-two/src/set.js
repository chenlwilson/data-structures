var Set = function() {
  var set = Object.create(setPrototype);
<<<<<<< HEAD
  set._storage = {};
||||||| merged common ancestors
  set._storage = null; // fix me
=======
  set.storage = {}; // fix me
>>>>>>> part-one
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
<<<<<<< HEAD
  if (typeof item === 'object') {
    this._storage[JSON.stringify(item)] = item;
  } else {
    this._storage[item] = item;
  }
  return Object.keys(this._storage).length;
||||||| merged common ancestors
=======
  this.storage[item] = true;
>>>>>>> part-one
};

setPrototype.contains = function(item) {
<<<<<<< HEAD
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }
  if (this._storage[item]) {
    return true;
  }
  return false;
||||||| merged common ancestors
=======
  if(this.storage[item]) {
    return true;
  }
  return false;
>>>>>>> part-one
};

setPrototype.remove = function(item) {
<<<<<<< HEAD
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }
  delete this._storage[item];
||||||| merged common ancestors
=======
  if(this.storage[item]) {
    delete this.storage[item];
  }
>>>>>>> part-one
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(n)
 * remove: O(n)
*/