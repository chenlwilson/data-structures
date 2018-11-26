var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.sizeMax = 0;
  someInstance.sizeMin = 0;

  return someInstance;
};

var queueMethods = {
  size: function() {
    if(this.sizeMax - this.sizeMin > 0) {
      return this.sizeMax - this.sizeMin;
    }
    return 0;
  },

  enqueue: function(value) {
    this.storage[this.sizeMax] = value;
    this.sizeMax++;
  },

  dequeue: function() {
    this.sizeMin++;
    return this.storage[this.sizeMin-1];
    delete this.storage[this.sizeMin-1];
  }
};
