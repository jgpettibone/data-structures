var Stack = function() {
  this._storage = {};
  this._size = 0; 
};

Stack.prototype.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function() {
  if (this._size)
    this._size--;
  return this._storage[this._size];
};

Stack.prototype.size = function() {
  return this._size;
};

///////////////////////////////////////////////////////////////////////////////
//
// Pros: 
// --- Provides a built-in technique for multiple-generation inheritance
//     (prototype chaining).
// --- Connection from the constructor's prototype's properties to 
//     past and future instance objects is dynamic and immediate.
// --- Ratio of memory usage to bundled information is lowest.
// --- Instance objects can report who their constructor function is
//     (via 'instanceof' operator).
// --- Vars local to the constructor's scope remain private in 
//     instance objects and accessible only by explicitly 
//     defined interface methods (closure).
// Cons: 
// --- Constructor must be invoked via the mysterious 'new' keyword.
// --- Lack of explicit definition and return of each instance object 
//     within the constructor method looks misleading.
// --- Use of the 'this' keyword within constructor to refer to the 
//     mid-construction instance object (rather than a dot-notation, 
//     function-invoking object) looks misleading.
// --- Vars local to the constructor's scope that are not properties of the 
//     instance are inaccessible to prototype properties.
// --- Object-literal definition of prototype properties is not possible.
//
///////////////////////////////////////////////////////////////////////////////
//
// Pseudoclassical Instantiation & Inheritance
//
// When invoked via the keyword 'new', the constructor function implicitly 
// declares an instance object as 'this'. Properties can then be defined 
// for 'this'--which regrettably will remain public, but can hold values 
// that will remain unique to each instance. The constructor's 'this' 
// instance object is returned, also implicitly.
//
// By default, our constructor inherits the 'Object' constructor's
// 'prototype' property. We augment it with properties that 
// will be shared by all instance objects.
//
// Properties of the constructor function's own 'prototype' property
// are dynamically linked to all previously constructed and 
// subsequently constructed instance object. 
//
// Properties of the constructor function's own 'prototype' property
// are visible within instance objects, but will not counted as 'keys'
// nor reported as 'own' properties of any instance object. 
//
// Properties of the constructor function's own 'prototype' property
// have access to all properites of each instance object (as any 
// public method does), but they have no access to the instance 
// object's closure scope (the constructor's local scope). 
//
///////////////////////////////////////////////////////////////////////////////
