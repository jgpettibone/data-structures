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
    if (this.left) {
      depth++;
      this.left.insert(value, root, depth);
    }
    else {
      depth++;
      root.nodes++;
      this.left = new BinarySearchTree(value);
      if (root.depth < depth) root.depth = depth;
      root.checkDepth();
    }
  }
  else if (this.value < value) {
    if (this.right) {
      depth++;
      this.right.insert(value, root, depth);
    }
    else {
      depth++;
      root.nodes++;
      this.right = new BinarySearchTree(value);
      if (root.depth < depth) root.depth = depth;
      root.checkDepth();
    }
  }
};

BinarySearchTree.prototype.checkDepth = function() {
  var balancedDepth = Math.log(this.nodes) / Math.log(2) - 1;
  if (this.depth > balancedDepth * 2) console.log('help!');
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
