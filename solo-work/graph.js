var Graph = function(){
  this.nodes = {};
  this.edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if (Object.keys(this.nodes).length === 1) 
    this.addEdge(Object.keys(this.nodes)[0], newNode);
  if (toNode)
    this.addEdge(newNode, toNode);
  this.nodes[newNode] = true;
};

Graph.prototype.contains = function(node){
  if (this.nodes[node]) return true;
  return false;
};

Graph.prototype.removeNode = function(node){
  if (this.nodes[node])
    delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.edges[fromNode] === toNode) return true;
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode] = toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.edges[fromNode] === toNode)
    delete this.edges[fromNode];    
  if (!this.hasEdge(fromNode)) this.removeNode(fromNode);
  if (!this.hasEdge(toNode)) this.removeNode(toNode);
};

Graph.prototype.hasEdge = function(node){
  for (var key in this.edges) {
    if (key === node) return true;
    if (this.edges[key] === node) return true; 
  }
  return false;
};
