/*
 * Bubble sort is the most basic sorting algorithm. 
 * It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Optimize - During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * [if already sorted then it's just linear]
 *
 * Optimize - don't check the last element since we know it's sorted
*/

// Note - this implementation mutates the input array

var bubbleSort = function(array) {

  // don't need to sort an array of 0 or 1 elements
  if (array.length < 2) return array;

  // swaps two values in the array
  var swap = function(left, right) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }

  // optimization - starting us off to get the while loop going
  var swapped = true;
  // optimization - every pass should have the largest element at the end
  var last = array.length-1;

  // as long as swapping is happening, we keep iterating over the array
  // if we make a whole pass without swapping, we know we've already 
  // got a sorted array and we can abort
  while (swapped) {
    swapped = false;
    for (var i = 0; i < last; i++) {
      if (array[i] > array[i+1]) {
        swap(i,i+1);
        swapped = true;
      }
    }
    // don't have to re-check the last element
    last--;
  }

  return array;

};



