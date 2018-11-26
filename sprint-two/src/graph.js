
// Instantiate a new graph
var Graph = function() {
<<<<<<< HEAD
  this._nodes = {};
||||||| merged common ancestors
=======
  this.nodes = {};
>>>>>>> part-one
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
<<<<<<< HEAD
  this._nodes[node] = {}; //nodes = {nodes: {5:{2: true, 4:true}}
||||||| merged common ancestors
=======
  this.nodes[node] = {};
>>>>>>> part-one
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
<<<<<<< HEAD
  return this._nodes[node] ? true : false;
||||||| merged common ancestors
=======
  return this.nodes[node] ? true : false;
>>>>>>> part-one
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
<<<<<<< HEAD
  var container = [];
  for (var key in this._nodes[node]) {
    if (this._nodes[node][key] === true) {
      container.push(parseInt(key));
    }
  }
  delete this._nodes[node];
  for (var key in this._nodes) { //nodes = {{3: {2: true}}} this.nodes[2][3]
    if (this._nodes[key][node] === true) {
      delete this._nodes[key][node];
    }
  }

  return container;
||||||| merged common ancestors
=======
  delete this.nodes[node];
>>>>>>> part-one
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two _nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
<<<<<<< HEAD
  if (this._nodes[fromNode] && this._nodes[toNode]
    && this._nodes[fromNode][toNode] === true
    && this._nodes[toNode][fromNode] === true) {
    return true;
  }
  return false;
||||||| merged common ancestors
=======
  if(this.nodes[fromNode] && this.nodes[toNode]
    && this.nodes[fromNode][toNode] === true
    && this.nodes[toNode][fromNode] === true) {
    return true;
  }
  return false;
>>>>>>> part-one
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
<<<<<<< HEAD
  if (this._nodes[fromNode] && this._nodes[toNode]) {
    this._nodes[fromNode][toNode] = true;//{fromNote: {toNode: true}}
    this._nodes[toNode][fromNode] = true; //nodes = {{2:{3: true}}, {3: {2: true}}} this.nodes[2][3]
  }
||||||| merged common ancestors
=======
  if(this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode][toNode] = true;
    this.nodes[toNode][fromNode] = true;
  }
>>>>>>> part-one
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
<<<<<<< HEAD
  delete this._nodes[fromNode][toNode];
  delete this._nodes[toNode][fromNode];
||||||| merged common ancestors
=======
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
>>>>>>> part-one
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
<<<<<<< HEAD
  for (var key in this._nodes) {
    cb(key);
  }
||||||| merged common ancestors
=======
  for(var key in this.nodes) {
    cb(key);
  }
>>>>>>> part-one
};


/*
 * Complexity: What is the time complexity of the above functions?
 * finding a key in obj, is it O(1) or O(n)?
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(1)
 * hasEdge: O(1)
 * addEdge: O(1)
 * removeEdge: O(1)
 * forEachNode: O(n)
 */
