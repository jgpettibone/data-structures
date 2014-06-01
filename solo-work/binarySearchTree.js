var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
  this.depth = 1;
  this.nodes = 1;
};

BinarySearchTree.prototype.insert = function(value, root, depth) {
  root = root || this;
  depth = depth || 1;
  if (this.value > value) {
    depth++;
    if (this.left) {
      this.left.insert(value, root, depth);
    }
    else {
      root.nodes++;
      this.left = new BinarySearchTree(value);
      if (root.depth < depth) root.depth = depth;
      root.checkDepth();
    }
  }
  else if (this.value < value) {
    depth++;
    if (this.right) {
      this.right.insert(value, root, depth);
    }
    else {
      root.nodes++;
      this.right = new BinarySearchTree(value);
      if (root.depth < depth) root.depth = depth;
      root.checkDepth();
    }
  }
};

BinarySearchTree.prototype.checkDepth = function() {
  var balancedDepth = Math.log(this.nodes) / Math.log(2);
  if (this.depth > balancedDepth * 2) {
    this.rebalance();
  }
};

BinarySearchTree.prototype.rebalance = function() {
  var values = [];
  this.depthFirstLog(function(value){ 
    values.push(value); 
  });
  values.sort(function(a,b){ return a-b; });

  var midIndex = Math.floor(values.length / 2);
  var root = new BinarySearchTree(values[midIndex]);

  var populateTree = function(root, values) {
    var midIndex = Math.floor(values.length / 2);
    root.insert(values[midIndex]);
    var values1 = values.slice(0,midIndex);
    var values2 = values.slice(midIndex+1)
    if (values1.length > 0) populateTree(root, values1);
    if (values2.length > 0) populateTree(root, values2);
  };

  populateTree(root, values);

  this.value = root.value;
  this.left = root.left;
  this.right = root.right;
  this.depth = root.depth;
  this.nodes = root.nodes;

};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) return true;
  if (this.left) 
    if (this.left.contains(target)) return true;
  if (this.right)
    if (this.right.contains(target)) return true;
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left)
    this.left.depthFirstLog(callback);
  if (this.right)
    this.right.depthFirstLog(callback);
};

BinarySearchTree.prototype.breadthFirstLog = function(callback, queue) {
  var queue = [];
  queue.push(this);
  while(queue.length > 0) {
    var current = queue.shift();
    callback(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
};
