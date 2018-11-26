var Queue = function() {
  var someInstance = {};
  var storage = {};
  var min = 0;
  var max = 0;

  someInstance.enqueue = function(value) {
    storage[max] = value;
    max++;
  }

  someInstance.dequeue = function() {
    min++;
    return storage[min-1];
    delete storage[min-1];
  }

  someInstance.size = function() {
    if (max - min < 0) {
      return 0;
    }
    return max - min;
  }
  
  return someInstance
}












// var Queue = function() {
//   var someInstance = {};
//
//   // Use an object with numeric keys to store values
//   var storage = {};
//   var min = 0;
//   var max = 0;
//
//   // Implement the methods below
//
//   someInstance.enqueue = function(value) {
//     storage[max] = value;//0:a//1:b
//     max++;//1//2
//   };
//
//   someInstance.dequeue = function() {
//     min++; //1
//     return storage[min-1]; //0:a
//     delete storage[min-1];
//   };
//
//   someInstance.size = function() {
//     if (max - min > 0) {
//       return max - min;
//     }
//     return 0;
//   };
//
//   return someInstance;
// };
