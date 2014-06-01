var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance._storage = {};
  instance._size = 0;
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function() {
  if (this._size)
    this._size--;
  return this._storage[this._size];
};

stackMethods.size = function() {
  return this._size;
};


///////////////////////////////////////////////////////////////////////////////
//
// Pros: 
// --- Easy way to prototype a new maker function based off 
//     an existing object.
// --- Connection from prototypes to makers to instances is dynamic
//     Changes made to the prototype object will be reflected in all 
//     previously and subsequently made instance objects immediately.
// --- Memory usage is very low.
// --- Vars local to the maker's scope remain private in 
//     instance objects and accessible only by explicitly 
//     defined interface methods (closure).
// Cons: 
// --- Vars local to the maker's scope that are not properties of the 
//     instance are inaccessible to linked-in (prototyped) properties.
// --- Object-literal definition of instance properties is not possible.
//
///////////////////////////////////////////////////////////////////////////////
//
// Prototypal Instantiation & Inheritance - The Details:
//
// The maker function declares an instance object via the
// 'create' method of the 'Object' object, passing into that
// method another object to serve as its prototype. Further 
// initial properties may be assigned. The instance object
// is returned.
//
// There is nothing inherently special about the prototype object.
// (it is not previously declared to be a 'prototype'). 
//
// The prototype object could exist in shared scope or could be
// passed into the maker function's invocation. 
//
// The prototype object's properties are linked (not cloned)
// into the instance object. They will be visible within and 
// accessible from the instance, but not counted as keys 
// or 'own' properties of the instance.
//
// Changes made to properties of the prototype object 
// will be reflected in each instance object immediately. 
//
// Linked-in (prototyped) properties have access to all other 
// properites of the instance object (as public methods do), 
// but they have no access to the instance object's closure scope 
// (the maker's local scope). 
//
///////////////////////////////////////////////////////////////////////////////
