var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var min = 0;
  var max = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[max] = value;//0:a//1:b
    max++;//1//2
  };

  someInstance.dequeue = function() {
    var firstItem = storage[min];//0:a
    delete storage[min];
    min++;//1
    return firstItem
  };

  someInstance.size = function() {
    if (max - min > 0) {
      return max - min;
    }
    return 0;
  };

  return someInstance;
};
