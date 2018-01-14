function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 
 //var newArray = array.unshift(element);
 //return newArray;
 return [element,...array];
} //WRONG. make sure to add the spread operator

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  
  return array.unshift(element);
  
  
} //CORRECT 

function addElementToEndOfArray(array, element) {
  
  //var newArray = array.push(element)
  
  return [...array,element];

} //WRONG. USE SPREAD OPERATOR

function destructivelyAddElementToEndOfArray(array, element) {
  
  array.push(element);
  return  array;

} //RETURN THE ARRAY, NOT THE LENGTH OF THE ARRAY.

function accessElementInArray(array, index) {
  
  return array[index];

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  
  array.pop();
  return array;

}

function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
