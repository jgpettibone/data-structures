var makeStack = function(){
  var instance = {};
  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if (size)
      size--;
    return storage[size];
  };

  instance.size = function(){
    return size;
  };
  
  return instance;
};

///////////////////////////////////////////////////////////////////////////////
//
// Pros: 
// --- Extremely simple to read & write. 
// --- Vars local to the maker's scope remain private in 
//     instance objects and accessible only by explicitly 
//     defined interface methods (closure).
// Cons:
// --- Requires the most memory.
// --- Links b/n instances and makers are static. 
//     Once intantiated, vars and properites 
//     can't be universally changed.
//
///////////////////////////////////////////////////////////////////////////////
//
// Functional instantiation - The Details:
//
// The maker function (makeStack)
// --- declares an instance object (line 2)
// --- assigns it initial properties (lines 3-4: storage, size)
// --- returns it (line 21)
//
// The maker function might also declare local vars that would
// be accessible to the returned instance object's methods
// (via closure), but such vars would remain private otherwise.
//
// Each instance object, its properites, and its closure scope
// (if any) is unique (independently mutable) and exists in
// separate memory. 
//
// Once instantiated, no dynamic link exists between the maker
// and the instances.
//
///////////////////////////////////////////////////////////////////////////////
