class Stack {
  constructor () {
    this.storage = {};
    this.stackSize = 0;
  }

  size() {
    if (this.stackSize < 0) {
      return 0;
    }
    return this.stackSize
  }

  push(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  }

  pop() {
    this.stackSize--;
    return this.storage[this.stackSize];
    delete this.storage[this.stackSize];
  }
}



// class Stack {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   constructor(storage, stackSize) {
//     this.storage = {};
//     this.stackSize = 0;
//   }
//
//   size() {
//     if(this.stackSize > 0)
//       return this.stackSize;
//     else
//       return 0;
//   }
//
//   push(value) {
//     this.storage[this.stackSize] = value;
//     this.stackSize++;
//   }
//
//   pop() {
//     this.stackSize--;
//     return this.storage[this.stackSize];
//     delete this.storage[this.stackSize];
//   }
//
// }
