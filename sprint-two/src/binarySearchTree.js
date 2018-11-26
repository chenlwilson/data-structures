<<<<<<< HEAD
var BinarySearchTree = function(value) {
  var newBST = {};

  newBST._value = value;
  newBST._left = null;
  newBST._right = null;

  newBST.insert = function(newValue) {
    var newNode = BinarySearchTree(newValue);

    var addNode = function(tree) {
      if (newValue < tree._value) {
        if (tree._left === null) {
          tree._left = newNode;
        }
        return addNode(tree._left);
      }

      if (newValue > tree._value) {
        if (tree._right === null) {
          tree._right = newNode;
        }
        return addNode(tree._right);
      }
    };

    return addNode(newBST);

  };

  newBST.contains = function(target) {

    var search = function(node) {

      if (target === node._value) {
        return true;
      } else if (target < node._value && node._left !== null) {
        return search(node._left);
      } else if (target > node._value && node._right !== null) {
        return search(node._right);
      }
      return false;
    };

    return search(newBST);
  };

  newBST.depthFirstLog = function(cb) {

    var callEachValue = function(node) {
      //{value: 5, left: {value: 3, }}
      cb(node._value);

      if (node._left) {
        callEachValue(node._left);
      }
      if (node._right) {
        callEachValue(node._right);
      }

    };

    return callEachValue(newBST);

  };

  return newBST;
};
||||||| merged common ancestors
var BinarySearchTree = function(value) {
};
=======
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
>>>>>>> part-one

  };

  depthFirstLog(cb) {

  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 */
