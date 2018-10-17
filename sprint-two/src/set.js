var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'object') {
    this._storage[JSON.stringify(item)] = item;
  } else {
    this._storage[item] = item;
  }
  return Object.keys(this._storage).length;
};

setPrototype.contains = function(item) {
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }
  if (this._storage[item]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(n)
 * remove: O(n)
*/