var Graph = function(){
  this._nodes = {};
  this._edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if (Object.keys(this._nodes).length === 1) 
    this.addEdge(Object.keys(this._nodes)[0], newNode);
  if (toNode)
    this.addEdge(newNode, toNode);
  this._nodes[newNode] = true;
};

Graph.prototype.contains = function(node){
  if (this._nodes[node]) return true;
  return false;
};

Graph.prototype.removeNode = function(node){
  if (this._nodes[node])
    delete this._nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this._edges[fromNode] === toNode) return true;
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._edges[fromNode] = toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this._edges[fromNode] === toNode)
    delete this._edges[fromNode];    
  if (!this.hasEdge(fromNode)) this.removeNode(fromNode);
  if (!this.hasEdge(toNode)) this.removeNode(toNode);
};

Graph.prototype.hasEdge = function(node){
  for (var key in this._edges) {
    if (key === node) return true;
    if (this._edges[key] === node) return true; 
  }
  return false;
};
