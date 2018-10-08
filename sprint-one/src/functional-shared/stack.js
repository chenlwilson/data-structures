var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackSize = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
}

//if using extend instead of _.extend

// var extend = function(obj, methods) {
//   for (var key in methods) {
//     obj[key] = methods[key];
//   }
// }

var stackMethods = {
  size: function() {
    if(this.stackSize > 0) {
      return this.stackSize;
    }
    return 0;
  },

  push: function(value) {
    this.storage[this.stackSize] = value;//0:a
    this.stackSize++;//1
  },

  pop: function() {
    this.stackSize--;//1=>0
    return this.storage[this.stackSize];//0:a
    delete this.storage[this.stackSize];
  }

}
