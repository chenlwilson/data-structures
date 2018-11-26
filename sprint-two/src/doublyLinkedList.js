var doublyLinkedList = function() {
  var list = {};
  list._head = null;
  list._tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);//{value:value, next:null}
    if (list._head === null && list._tail === null) {
      list._tail = newNode;
      list._head = newNode;
      return null;
    } else {
      var oldTail = list._tail;
      oldTail.next = newNode;//add new node to the lastnode.next
      newNode.previous = oldTail;//point previous to tail;
      list._tail = newNode;//point tail to the new node
      return oldTail.value;
    }
  };

  list.removeTail = function() {
    var oldTail = list._tail;
    if (list._tail === null) {
      return null;
    } else if (list._tail.previous === null) {
      list._tail = null;
      return oldTail.value;
    } else {
      list._tail = list._tail.previous;
      list._tail.next = null;
      return oldTail.value;
    }
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list._head === null) {
      list._head = newNode;
    } else {
      list._head.previous = newNode;
      newNode.next = list._head;
      list._head = newNode;
    }
  };

  list.removeHead = function() {
    var oldHead = list._head;
    if (list._head === null) {
      return null;
    } else if (list._head.next === null) {
      list._head = null;
      return oldHead.value;
    } else {
      list._head = oldHead.next;//point head to the 2nd node
      list._head.previous = null;
      return oldHead.value;
    }
  };

  list.contains = function(target) {

    var hasTarget = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return hasTarget(node.next);
      }
      return false;
    };

    return hasTarget(list._head);
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
   * Complexity: What is the time complexity of the above functions?
   * addToTail: O(1)
   * removeHead: O(1)
   * contains: O(n)
  */
