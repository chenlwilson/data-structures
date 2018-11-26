
var LinkedList = function() {

  var list = {};
  list._head = null;
  list._tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);//{value:value, next:null}
    if(list._head === null && list._head === null) {
      list._tail = newNode;
      list._head = newNode;
    } else {
      var oldTail = list._tail;
      oldTail.next = newNode;//add new node to the lastnode.next
      list._tail = newNode;//point tail to the new node
      return oldTail.value;
    }
  };


  list.removeHead = function() {
    var oldHead = list._head;
    list._head = list._head.next;//point head to the 2nd node
    return oldHead.value;
  };

  list.contains = function(target) {
    var hasTarget = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return hasTarget(node.next);
      } else {
        return false;
      }
    }

    return hasTarget(list._head);
  };

  return list;
};



  var Node = function(value) {
    var node = {};

    node.value = value;//value: n
    node.next = null;//next: node

    return node;
  };

  /*
   * Complexity: What is the time complexity of the above functions?
   * addToTail: O(1)
   * removeHead: O(1)
   * contains: O(n)
   */
