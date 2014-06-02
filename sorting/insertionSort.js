/**
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.

 **/

 // Note - this implementation mutates the input array

var insertionSort = function(array) {

  // don't need to sort an array of 0 or 1 elements
  if (array.length < 2) return array;

  
  var swap = function(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  for (var i = 1; i < array.length; i++) {
    var index = i;
     while (array[index] < array[index-1] && index > 0) {
      swap(array, index, index-1);
      index--;
    }
  }

  return array;
};
