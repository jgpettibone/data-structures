var Queue = function() {
  this._storage = {};
  this._last = 0;
  this._first = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._last] = value;
  this._last++;
};

Queue.prototype.dequeue = function() {
  var result = this._storage[this._first];
  this._first++;
  return result;
};

Queue.prototype.size = function() {
  if (this._last - this._first >=0)
    return this._last - this._first;
  return 0;
};
