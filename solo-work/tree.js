var Tree = function(value){
  this.value = value;
  this.children = [];
};


Tree.prototype.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

Tree.prototype.contains = function(target){
  if (this.value === target) return true;
  if (this.children) {
    for (var i =0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) return true;
    }
  }
  return false;
};

