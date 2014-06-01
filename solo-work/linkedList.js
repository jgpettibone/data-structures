var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function(){
    if (this.head)
      this.head = this.head.next;      
  };

  list.contains = function(target, node){
    if (this.tail === null) return false;
    var current = this.head;
    while (current) {
      if (current.value === target) return true;
      current = current.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
