var Tree = function(value) {
  var newTree = {};

  newTree._value = value;

  newTree._children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this._children.push(newNode);
  return this._children.length;
};

treeMethods.contains = function(target) {
  var result = false;
  var findTarget = function(tree, targetValue) {
    if (tree._value === targetValue ) {
      result = true;
    } else {
      if (tree._children.length > 0) {
        for (let i = 0; i < tree._children.length; i++) {
          findTarget(tree._children[i], targetValue);
        }
      }
    }
  };
  findTarget(this, target);
  return result;
};




/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
