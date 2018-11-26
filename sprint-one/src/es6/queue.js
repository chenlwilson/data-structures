class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.sizeMax = 0;
    this.sizeMin = 0;
  }

  size() {
    if(this.sizeMax - this.sizeMin > 0)
      return this.sizeMax - this.sizeMin;
    else
      return 0;
  };

  enqueue(value) {
    this.storage[this.sizeMax] = value;
    this.sizeMax++
  };

  dequeue() {
    this.sizeMin++;
    return this.storage[this.sizeMin-1];
    delete this.storage[this.sizeMin-1];
  };

}
