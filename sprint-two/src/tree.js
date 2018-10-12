var Tree = function(value) {
  var newTree = {};

  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  var result = false;
  var findTarget = function(tree, targetValue) {
    if (tree.value === targetValue ) {
      result = true;
    } else {
      if (tree.children.length > 0) {
        for (let i = 0; i < tree.children.length; i++) {
          findTarget(tree.children[i], targetValue);
        }
      }
    }
  };
  findTarget(this, target);
  return result;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
