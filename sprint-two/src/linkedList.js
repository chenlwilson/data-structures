
var LinkedList = function() {

  var list = {};
  list._head = null;
  list._tail = null;

  list.addToTail = function(value) {
    var oldTail = list._tail;
    var newNode = Node(value);//{value:value, next:null}
    if (list._head === null && list._head === null) {
      list._tail = newNode;
      list._head = newNode;
    }

    list._tail.next = newNode;//add new node to the lastnode.next
    list._tail = newNode;//point tail to the new node
    if (oldTail !== null) {
      return oldTail.value;
    }
  };

  list.removeHead = function() {
    list._head = list._head.next;//point head to the 2nd node
    return list._head.value;
  };

  list.contains = function(target) {
    var hasTarget = function(n) {
      if (n.value === target) {
        return true;
      } else if (n.next) {
        return hasTarget(n.next);
      }
      return false;
    };

    if (list._head.value === target) {
      return true;
    } else if (list._head.next) {
      return hasTarget(list._head.next);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
*/