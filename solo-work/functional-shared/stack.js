var makeStack = function() {
  var instance = {};
  instance._storage = {};
  instance._size = 0;

  _.extend(instance, stackMethods);
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
// --- Relatively simple way to extend a new maker function
//     based off an existing object.
// --- Connection from extension to maker is dynamic. 
//     Changes made to the extension object will be reflected
//     in all subsequently made instance objects.
// --- Vars local to the maker's scope remain private in 
//     instance objects and accessible only by explicitly 
//     defined interface methods (closure).
// Cons:
// --- Connection from maker to instances is static. 
//     Changes made to the extension object will not be reflected
//     in any previously made instance objects.
// --- Vars local to the maker's scope that are not properties of the 
//     instance are inaccessible to cloned-in (extended) properties.
// --- While taking less memory than plain functional style, 
//     still requires more memory than prototypal or pseudoclassical.
//
///////////////////////////////////////////////////////////////////////////////
//
// Functional-shared Instantiation & Inheritance - The Details:
//
// The maker function (makeStack) 
// --- declares an instance object (line 2)
// --- assigns it initial properties (lines 3-4: _storage, _size)
// --- augments it further with properties from another object 
//     (via 'extend' or property cloning)  (line 6 via extend)
// --- returns it (line 8)
//
// The extension object could exist in shared scope or could be
// passed into the maker function's invocation. 
// 
// The extension object's properties are cloned into the instance 
// object as new properties unique to each instance object.
//
// Cloned-in properties have access to all other properites 
// of the instance object (as public methods do), but they 
// have no access to the instance object's closure scope 
// (the maker's local scope). 
//
// Once instantiated, no dynamic link exists between the maker
// and the instances.
//
///////////////////////////////////////////////////////////////////////////////
