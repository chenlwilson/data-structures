var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var hasTarget = function(n) {
    if(n.value === target) {
      return true;
    }
    for(var i = 0; i < n.children.length; i++) {
      if(hasTarget(n.children[i])) {
        return true;
      }
    }
    return false;
  }
  return hasTarget(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 *addChild: O(1)
 *contains: O(n)
 */
