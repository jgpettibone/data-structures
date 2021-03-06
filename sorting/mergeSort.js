/*
 * Mergesort takes a divide and conquer approach to sorting.  the 
 * array is divided in half until it gets down to arrays of 
 * one element each.  The sorting happens at the time the divided 
 * arrays get merged back together.  They are merged so that the 
 * first element in each array is compared and the smaller is 
 * merged first.  This gives us sorted order.
 *
 *
*/

var mergeSort = function(array) {

  // don't need to sort an array of 0 or 1 elements
  if (array.length < 2) return array;

  var merge = function(leftArray, rightArray) {
    var result = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
      if (leftArray[0] < rightArray[0]) 
        result.push(leftArray.shift());
      else 
        result.push(rightArray.shift());
    }
    // gets any leftovers in leftArray
    while (leftArray.length > 0) 
      result.push(leftArray.shift());
    // gets any leftovers in rightArray
    while(rightArray.length > 0) 
      result.push(rightArray.shift());

    return result;
  };

  // divide and conquer approach
  // it'll be n log n - n for the merge and log n for the dividing
  var midIndex = Math.floor(array.length / 2);
  var leftArray = array.slice(0,midIndex);
  var rightArray = array.slice(midIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};
