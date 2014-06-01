var makeQueue = function(){
  var instance = {};
  instance._storage = {};
  instance._last = 0;
  instance._first = 0;

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._last] = value;
  this._last++;
};

queueMethods.dequeue = function() {
  var result = this._storage[this._first];
  this._first++;
  return result;
};

queueMethods.size = function() {
  if (this._last - this._first >= 0)
    return this._last - this._first;
  return 0;
};
