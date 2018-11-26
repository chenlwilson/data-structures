var Tree = function(value) {
  var newTree = {};
<<<<<<< HEAD

  newTree._value = value;

  newTree._children = [];
  //{value : 1, children: [], parent: null}
  //tree.addchild(2)
  //{value:1, children: [{value: 2, children: [], parent: null}], parent: null}

  newTree._parent = null;

  _.extend(newTree, treeMethods);
||||||| merged common ancestors
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
=======
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
>>>>>>> part-one

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
<<<<<<< HEAD
  var newNode = Tree(value);
  this._children.push(newNode);
  newNode._parent = this;
  return this._children.length;
||||||| merged common ancestors
=======
  this.children.push(Tree(value));
>>>>>>> part-one
};

treeMethods.contains = function(target) {
<<<<<<< HEAD
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

treeMethods.removeFromParent = function(value) {
  var findTarget = function(tree, targetValue) {
    if (tree._value === targetValue ) {
      if (tree._parent !== null) {
        for (let i = 0; i < tree._parent._children.length; i++) {
          if (tree._parent._children[i]._value === targetValue) {
            tree._parent._children.splice(i, 1);
            break;
          }
        }
      }
      tree._parent = null;
    } else {
      if (tree._children.length > 0) {
        for (let i = 0; i < tree._children.length; i++) {
          findTarget(tree._children[i], targetValue);
        }
      }
    }
  };
  findTarget(this, value);
};

treeMethods.traverse = function(cb) {

  var findTarget = function(tree) {
    tree._value = cb(tree._value);

    if (tree._children.length > 0) {
      for (var i = 0; i < tree._children.length; i++) {
        findTarget(tree._children[i]);
      }
    }
  };
  findTarget(this);

||||||| merged common ancestors
=======
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
>>>>>>> part-one
};



/*
 * Complexity: What is the time complexity of the above functions?
<<<<<<< HEAD
 * addChild: O(1)
 * contains: O(n)
||||||| merged common ancestors
=======
 *addChild: O(1)
 *contains: O(n)
>>>>>>> part-one
 */
