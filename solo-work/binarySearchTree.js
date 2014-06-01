var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left) this.left.insert(value);
    else this.left = new BinarySearchTree(value);
  }
  else if (this.value < value) {
    if (this.right) this.right.insert(value);
    else this.right = new BinarySearchTree(value);
  }
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
