var makeQueue = function(){
  var instance = {};
  var storage = {};
  var size = 0;
  var first = 0;

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    var result = storage[first];
    first++;
    return result;
  };

  instance.size = function(){
    if (size - first >= 0)
      return size-first;
    return 0;
  };

  return instance;
};
