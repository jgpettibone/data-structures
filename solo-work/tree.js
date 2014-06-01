var Tree = function(value){
  this.value = value;
  this.parent = null;
  this.children = [];
};

Tree.prototype.addChild = function(value){
  var child = new Tree(value);
  child.parent = this;
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

Tree.prototype.removeFromParent = function(){
  var index = this.parent.children.indexOf(this);
  this.parent.children = this.parent.children.slice(0,index) + this.parent.children.slice(index+1);
  this.parent = null;
};
