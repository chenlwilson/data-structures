var Stack = function() {
  this.stackSize = 0;
  this.storage = {};
}

Stack.prototype.size = function() {
  if (this.stackSize < 0) {
    return 0;
  }
  return this.stackSize;
}

Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
}

Stack.prototype.pop = function() {
  this.stackSize--;
  return this.storage[this.stackSize];
  delete this.storage[this.stackSize];
}


// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   this.storage = {};
//   this.stackSize = 0;
// };
//
// Stack.prototype.size = function() {
//   if (this.stackSize > 0) {
//     return this.stackSize;
//   }
//   return 0;
// }
//
// Stack.prototype.push = function(value) {
//   this.storage[this.stackSize] = value;
//   this.stackSize++;
// }
//
// Stack.prototype.pop = function() {
//   this.stackSize--;
//   return this.storage[this.stackSize];
//   delete this.storage[this.stackSize];
// }
