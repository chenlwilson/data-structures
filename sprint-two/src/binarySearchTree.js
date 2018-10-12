var BinarySearchTree = function(value) {
  var newBST = {};

  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  newBST.insert = function(newValue) {
    var newNode = BinarySearchTree(newValue);

    var addNode = function(tree) {
      if (newValue < tree.value) {
        if (tree.left === null) {
          tree.left = newNode;
        }
        return addNode(tree.left);
      }

      if (newValue > tree.value) {
        if (tree.right === null) {
          tree.right = newNode;
        }
        return addNode(tree.right);
      }
    };

    return addNode(newBST);

  };

  newBST.contains = function(target) {

    var search = function(node) {

      if (target === node.value) {
        return true;
      } else if (target < node.value && node.left !== null) {
        return search(node.left);
      } else if (target > node.value && node.right !== null) {
        return search(node.right);
      }
      return false;
    };

    return search(newBST);
  };

  newBST.depthFirstLog = function(cb) {

    var callEachValue = function(node) {
      //{value: 5, left: {value: 3, }}
      cb(node.value);

      if (node.left) {
        callEachValue(node.left);
      }
      if (node.right) {
        callEachValue(node.right);
      }

    };

    return callEachValue(newBST);

  };

  return newBST;
};




/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 */
