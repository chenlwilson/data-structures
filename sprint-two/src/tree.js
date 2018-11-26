var Tree = function(value) {
  var newTree = {};

  newTree._value = value;
  newTree._children = [];
  newTree._parent = null;

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

    var findValue = function(node) {
      if (node._value === value) {
        var index = node._parent._children.indexOf(value);
        node._parent._children.splice(index, 1);
        node._parent = null;
      } else if (node._children.length > 0) {
        node._children.forEach(function(child) {
          findValue(child);
        })
      }
    }

    findValue(this);
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
