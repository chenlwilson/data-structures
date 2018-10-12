var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);//{value:value, next:null}
    if(list.head === null && list.head === null) {
      list.tail = newNode;
      list.head = newNode;
    }
    list.tail.next = newNode;//add new node to the lastnode.next
    list.tail = newNode;//point tail to the new node
  };




  list.removeHead = function() {
    list.head = list.head.next;//point head to the 2nd node
    return list.head.value;
  };

  list.contains = function(target) {
    var hasTarget = function(n) {
      if (n.value === target) {
        return true;
      } else if (n.next) {
        return hasTarget(n.next);
      }
      return false;
    }

    if (list.head.value === target) {
      return true;
    } else if (list.head.next) {
      return hasTarget(list.head.next);
    }
    return false;
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
    }

    if(list.head.value === target) {
      return true;
    } else if (list.head.next) {
      return hasTarget(list.head.next);
    }
    return false;
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
