var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    var found = false;
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket[j][1] = v;
        found = true;
      }
    }
    if (!found)
      bucket.push([k,v]);
  }
  else {
    bucket = [[k,v]];
  }
  this._storage.set(i, bucket);
  if (++this._size > this._limit * .75) {
    this.resize(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket = bucket.slice(0,j).concat(bucket.slice(j+1));
      }
    }
  }
  this._storage.set(i,bucket);
  if (--this._size < this._limit * .25) {
    this.resize(this._limit/2);    
  }

};

HashTable.prototype.resize = function(newLimit){
  var storage = this._storage;
  this._limit = newLimit;
  this._storage = makeLimitedArray(this._limit);
  for (var i = 0; i < storage.length; i++) {
    if (storage[i]){
      var bucket = storage[i];
      for (var j = 0; j < bucket.length; j++){
        this.insert(bucket[j][0], bucket[j][1]);
      }
    }
  }
};

