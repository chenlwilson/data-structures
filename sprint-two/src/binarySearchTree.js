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
      if (node.value !== null) {
        cb(node.value);
      }
      if (node.left.value !== null) {
        cb(node.left.value);
      }
      if (node.right.value !== null) {
        cb(node.right.value);
      }
      callEachValue(node.right);
      callEachValue(node.left);
    };

    return callEachValue(newBST);

  };

  return newBST;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
