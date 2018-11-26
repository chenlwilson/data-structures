var Tree = function(value) {
  var newTree = {};

  newTree._value = value;
  newTree._children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {

  addChild: function(value) {
    var newNode = Tree(value);
    this._children.push(newNode);
    newNode._parent = this;
    return this._children.length;
  },

  contains: function(target) {
    var findTarget = function(node) {
      if (node._value === target) {
        return true;
      }
      if (node._children.length > 0) {
        return node._children.reduce(function(result, child) {
          return result || findTarget(child);
        }, false);
      }
      return false;
    }

    return findTarget(this);
  },

  removeFromParent: function(value) {

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
  },

  traverse: function(cb) {

    var recurse = function(node) {

      node._value = cb(node._value);

      if (node._children.length > 0) {
        node._children.forEach(function(child) {
          recurse(child);
        })
      }
    };

    recurse(this);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
