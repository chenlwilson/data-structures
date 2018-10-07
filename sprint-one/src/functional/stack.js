var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value //0:a
    size++; //1
  };

  someInstance.pop = function() {
    //storage = {0: a}
    size--; //0
    var lastItem = storage[size];//storage["0"]
    delete storage[size];
    return lastItem;
  };

  someInstance.size = function() {
    if (size > 0) {
      return size;
    }
    return 0;
  };
  return someInstance;
};
