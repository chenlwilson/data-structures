class BinarySearchTree {
  constructor(value, left, right) {
    this.value = value;
    this.left = [];
    this.right = [];
  }

  insert(newValue) {
    if(newValue < this.value) {
      this.left.push(BinarySearchTree(newValue));
    }
    this.right.push(BinarySearchTree(newValue));
  };

  contains(target) {

  };

  depthFirstLog(cb) {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
