var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeMax = 0;
  this.sizeMin = 0;

};

Queue.prototype.size = function() {
  if(this.sizeMax - this.sizeMin > 0) {
    return this.sizeMax - this.sizeMin;
  }
  return 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeMax] = value;
  this.sizeMax++;
};

Queue.prototype.dequeue = function() {
  this.sizeMin++;
  return this.storage[this.sizeMin-1];
  delete this.storage[this.sizeMin-1];
};
