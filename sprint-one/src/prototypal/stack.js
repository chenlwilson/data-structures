var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.stackSize = 0;

  return someInstance;
};

var stackMethods = {
  size: function() {
    if (this.stackSize > 0) {
      return this.stackSize;
    }
    return 0;
  },

  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function() {
    this.stackSize--;
    return this.storage[this.stackSize];
    delete this.storage[this.stackSize];
  }
};
