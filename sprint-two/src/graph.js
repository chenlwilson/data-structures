
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {}; //nodes = {nodes: {5:{2: true, 4:true}}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var container = [];
  for (var key in this.nodes[node]) {
    if (this.nodes[node][key] === true) {
      container.push(parseInt(key));
    }
  }
  delete this.nodes[node];
  for (var key in this.nodes) { //nodes = {{3: {2: true}}} this.nodes[2][3]
    if (this.nodes[key][node] === true) {
      delete this.nodes[key][node];
    }
  }

  return container;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]
    && this.nodes[fromNode][toNode] === true
    && this.nodes[toNode][fromNode] === true) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode][toNode] = true;//{fromNote: {toNode: true}}
    this.nodes[toNode][fromNode] = true; //nodes = {{2:{3: true}}, {3: {2: true}}} this.nodes[2][3]
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
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
