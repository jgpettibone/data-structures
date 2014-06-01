var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (this.tail === null) {
    this.head = node;
    this.tail = node;
  }
  else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;    
  }
  else {
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head) {
    this.head = this.head.next;
    this.head.previous = null;
  }
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail) {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
};

DoublyLinkedList.prototype.contains = function(target) {
  var current = this.head;
  while (current){
    if (current.value === target) return true;
    current = current.next;
  }
  return false;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};

