var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  newBST.insert = function(newValue) {
    var newNode = BinarySearchTree(newValue);

    var addNode = function (node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        }
        return addNode(node.left, newNode);
      }
      if (newNode.value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        }
        return addNode(node.right, newNode);
      }
    }

    return addNode(newBST, newNode);
  };

  newBST.contains = function(target) {

      var search = function(node) {
        if (target === node.value) {
          return true;
        } else if (target < node.value && node.left) {
          return search(node.left);
        } else if (target > node.value && node.right) {
          return search(node.right);
        }
        return false;
      };

      return search(newBST);
    };

  newBST.depthFirstLog = function(cb) {

    var recurse = function(node) { //{value: 5, left: {value: 3, }}
      cb(node.value);

      if (node.left) {
        recurse(node.left);
      }
      if (node.right) {
        recurse(node.right);
      }
    };

    return recurse(newBST);
  }

  newBST.breadthFirstLog = function(cb) {
    var queue = [];
    cb(newBST.value);
    queue.push(newBST);

    var recurse = function(node) {
      if (node.left !== null) {
        cb(node.left.value);
        queue.push(node.left)
      }
      if (node.right !== null) {
        cb(node.right.value);
        queue.push(node.right)
      }
      queue.shift();
      if (queue.length > 0) {
        recurse(queue[0]);
      }
    }

    recurse(newBST);
  }


  return newBST;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 */
