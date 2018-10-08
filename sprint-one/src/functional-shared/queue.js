var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackMax = 0;
  someInstance.stackMin = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

//if using extend instead of _.extend

// var extend = function(obj, methods) {
//   for (var key in methods) {
//     obj[key] = methods[key];
//   }
// }

var queueMethods = {
  size: function() {
    if(this.stackMax - this.stackMin > 0) {
      return this.stackMax - this.stackMin;
    }
    return 0;
  },

  enqueue: function(value) {
    this.storage[this.stackMax] = value;
    this.stackMax++;
  },

  dequeue: function() {
    var firstItem = this.storage[this.stackMin];
    delete this.storage[this.stackMin];
    this.stackMin++;
    return firstItem;
  }

};
