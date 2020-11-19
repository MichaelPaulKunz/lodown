'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object.
 * Applies the action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * 
 * identity: Designed to take any value and return it unaltered
 * 
 * @param:  {*} value: The value to be returned
 * 
 * @return {*}: the returned value, same as the given value
 * 
 */ 
function identity(value){
  //input: any value
  //output: same value unchanged
  //constraints:
  //edge cases:
  return value;
    
}
module.exports.identity = identity;
 
/**
 * typeOf: Designed to return the data type of a given value
 * 
 * @param: {*} value: the value whose type we want to know
 * 
 * @return {String}: the data type of the value
 * 
 */ 
function typeOf(value){
   //input: any type
   //output: string
   //edge cases: none
   //constraints: none
   if (typeof value !== "object"){
        return typeof value;
    } else if (value === null){
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else {
        return "object";
    }
}
  
  module.exports.typeOf = typeOf;
  
  /**
   * first: Given an Array and a Number, return a new array of the first <Number>
   * items of the given array. If Number is greater than length of the Array,
   * return the full Array. If second parameter is less than zero (or first 
   * parameter is not an Array), return an empty Array. If second parameter is 
   * is not a Number, return the first item of the Array.
   * 
   * @param: {Array} arr: the array whose first few values we're returning
   * @param: {Number} num: the number of items to return
   * 
   * @return {Array}: array of items from beginning to number provided
   * 
   */
   
 function first(arr, num){
    //input: array, number
    //output: array
    //edge cases: first parameter not array, second parameter not a number or not given, negative, greater
    //constraints: none
    if (!Array.isArray(arr) || num < 0){
        return [];
    }//first edge case
    if (typeof num !== "number"){
        return arr[0];
    }//end conditional
    if (num < 0){
        return [];
    }//end conditional
    if (num >= arr.length){
        return arr;
    }//end conditional
    return arr.slice(0, num);
  }
  module.exports.first = first;
  
  /**
   * last: Given an Array and a Number, returns a new Array starting with the item <Number>, such that
   * if if <Number> === 1, then starting point is Array[0], if <Number> === 2, starting point is 
   * Array[1] and so on, through the end of the given array. If no Array is given, or Number is less
   * than zero, return empty Array. If no Number is given, return last item in Array. If 
   * Number is greater than or equal to the length of the Array, return the full Array.
   * 
   * @param: {Array}: the array whose last few values we're returning
   * @param: {Number} num: the starting point in the given Array
   * 
   * @return {*}: array of items from number provided to end of provided array
   * 
   */
function last(arr, num){ 
    //input: array, number
    //output: item of array, could be any datatype
    //edge cases: first parameter not array, second parameter not a number or not given, negative, greater
    //constraints: none
    if (!Array.isArray(arr) || num < 0){
        return [];
    }//first edge case
    if (typeof num !== "number"){
        return arr[arr.length - 1];
    }//end conditional
    if (num < 0){
        return [];
    }//end conditional
    if (num >= arr.length){
        return arr;
    }//end conditional
    return arr.slice(num - 1, arr[arr]);
   }
   module.exports.last = last;
   
   /**
    * indexOf: Designed to take an Array and a value contained in the array,
    * and return the index of the first occurance of the given value.
    * Return -1 if the value is not in the array
    * 
    * @param: {Array} arr: the array from which we draw our item
    * @param: {*} value: the value whose first occurance index is returned
    * 
    * return {Number}: The index of the given value's first occurance in the given Array
    * or -1 if the value does not occur in the Array
    */ 
    
function indexOf(arr, value){
    //input: an array, any value
    //output: number
    //edge cases: multiple occurances (return first), value not in array (return -1)
    //constraints: 
    
    for (let i = 0; i < arr.length; i++){
        if (value === arr[i]){
            return i;
        }//end conditional
    }//end loop
    return -1;
    }
    module.exports.indexOf = indexOf;
    
    /**
     * contains: Designed to take an Array and a value, and return True
     * if the value is contained in the Array, or False if it is not
     * 
     * @param: {Array} arr: the array we are searching through
     * @param: {*} value: the value we are searching for in our Array
     * 
     * @return {Boolean}: True if value is in Array. False if not, 
     * or if no value is given
     */
     
function contains(arr, value){
    /**
     * input: array, any value
     * output: boolean
     * edge cases: should be strict equality, return false if no value given
     */
    
    return arr.includes(value) ? true : false;
}

module.exports.contains = contains;

/**
 * unique: Takes an Array, returns a new Array with duplicate values removed
 * 
 * @param: {Array} arr: given array with possible duplicate values
 * 
 * @returns {Array}: new array with duplicate values removed
 */
 
function unique(array){
    // create a newArray variable and assign to it an empty array
    let newArray = [];
    // loop through the array passed to the function
    for (let i = 0; i < array.length; i++) {
        // if the previously defined indexOf function returns -1, 
        //meaning that the element is not found within the newArray, 
        //push the element to the newArray
      if (indexOf(newArray, array[i]) === -1) {
        newArray.push(array[i]);
      }
    }
    // return the newArray
    return newArray;
}
module.exports.unique = unique;

 /**
  * filter: Designed to filter values in an Array based on a test. 
  * Takes an Array and passes each item 
  * in the Array through a test Function. The test Function returns 
  * true if the item passes the test, false otherwise. Items that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Array} arr: The Array to filter.
  * @param {Function} func: The Function to be applied to each item in 
  * the Array. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 
function filter(arr, func){
    /**
     * input: Array, function
     * output: array
     * edge cases: function doesn't return boolean
     */ 
    //create new array 
    let newArray = [];
    //loop through given array, add items that pass test
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            newArray.push(arr[i]);
        }
    }
    //return array
    return newArray;
 } 
 module.exports.filter = filter;
 
/**
  * reject: Designed to filter values in an Array based on a test. 
  * Takes an Array and passes each item in the Array through a test 
  * Function. The test Function returns true if the item passes the 
  * test, false otherwise. Items that fail the test are collected 
  * and returned in an output Array.
  * 
  * @param {Array} arr: The Array to filter.
  * @param {Function} func: The Function to be applied to each item in 
  * the Array. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered Array items. 
  * The Array will contain only the values that failed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const noBs = reject(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(noBs); // -> ['a', 'c']
  */
  
function reject(arr, func){
    //input: array and a function
    //output: an array of the elements that did not pass the function
    //edge cases:
    //constraints:
    //create a new array to push the rejects into
    var newArr = [];
    //create a for loop that loops over the values in the array
    for (let i = 0; i < arr.length; i++){
        //then run the function on each element to see if they pass or fail
        if (!(func(arr[i], i, arr))){
            //if they fail, push them into the new array
            newArr.push(arr[i]);
        }
    }
    //return the new array with the reject values
    return newArr;
}
module.exports.reject = reject;

/**
  * partition: Designed to split values in an Array based on a test. 
  * Takes an Array and passes each item in the Array through a test 
  * Function. The test Function returns true if the item passes the 
  * test, false otherwise. Items that pass the test are collected in 
  * one Array, while items that fail the test are collected in a 
  * different Array. A two-item Array consisting first of the Array
  * containing the items that passed the test and next the Array 
  * containing itmes that failed the test is returned.
  * 
  * @param {Array} arr: The collection to filter.
  * @param {Function} func: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array of Arrays, the first Array containing the 
  * filtered collection values that passed the test, the next containing 
  * values that failed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const separateBs = partition(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(separateBs); // -> [['b', 'b'], ['a', 'c']]
  */
 
function partition(arr, func){
    /**
     * input: array, function
     * output: array of arrays
     */
    
    //declare new arrays 
    let truthArray = [];
    let falseArray = [];
    //loop through given array
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            truthArray.push(arr[i]); //push to truthArray
        } else{
            falseArray.push(arr[i]); //push to falseArray
        }
    }//end loop
    return [truthArray, falseArray];
}
module.exports.partition = partition;

/**
 * map: Takes an Array or Object and a Function, returns a new Array of values from
 * the given Array or values from the given Object after they have been altered by the given Function. 
 * Returned Array should be same length as given Array, or have as many items as given Object has properties.
 * 
 * @param: {Array or Object}: collection: Collection to iterate through.
 * @param: {Function}: func: Function to modify items or values in Array or Object
 * 
 * @return {Array}: Array of modified items or properties
 */
function map(collection, func){
    //input: a collection and a function
    //output: the return values of each value in the collection when passed through the function, in an array
    //edge cases: N/A
    //constraints: N/A
    let dataType = "";
    //first check to see if the collection is an array or object
    if (Array.isArray(collection)){
        dataType = "Array";
    } else if (typeof collection === "object"){
        dataType = "Object";
    }
    let newArr = [];
    //create a new array to push the function returns into
    //create an if statement to run the function whether its an array or an object
    if (dataType === "Array"){
        for (let i = 0; i < collection.length; i++){
            newArr.push(func(collection[i], i, collection));
        }
    } else if (dataType === "Object"){
        for (let key in collection){
            newArr.push(func(collection[key], key, collection));
        }
    }
    return newArr;
}
module.exports.map = map;

/**
 * pluck: Takes an Array of Objects and String representing a key in each Object in Array.
 * Returns new Array the values of the property in each Object with that key.
 * 
 * @param{Array}: arr: Array of Objects to iterate through
 * @param{String}: prop: The key whose in each Object we will return in an Array.
 * 
 * @return {Array}: The values of the properties stored at given key from each object in 
 * given Array.
 */

function pluck(arr, prop){
    /**
     * input: array of objects
     * output: array
     */
    //declare empty array
    let newArray = []; 
    //declare function that returns given property of object at array index
    function propert (itm, indx, arr){
       return arr[indx][prop];
    }
    //call _.map with arr array and propert function as arguments, assign value to newArray
    newArray = map(arr, propert);
    //return newArray
    return newArray;
}
module.exports.pluck = pluck;

/**
 * every: Takes a Collection (Array or Object) and a Function. Returns true if every item of
 * Array or value of Object returns true or truthy value when passed into given Function. If
 * no Function is given, returns true if every item or property contains true or truthy value.
 * 
 * @param{Array or Object}coll: The Collection over which we iterate.
 * @param{Function}: The Function that will act upon each item or value;
 * 
 * @return {Boolean}: True if each returned value is true or truthy. False if not.
 */
 
function every (coll, func){
    /**
     * input: a collection and a function
     * output: return true if every element in the collection passes the function, false if just one fails
     * edge cases: if the function doesnt return a boolean, if function is not given
     * constraints: N/A
     */
      let dataType = "";
    //first check to see if the collection is an array or object
    if (Array.isArray(coll)){
        dataType = "Array";
    } else if (typeof coll === "object"){
        dataType = "Object";
    }
    //next check to see if the function parameter exists, if it does not, return true if it has a true value within
    //the collection, and false if the collection includes a false value
    if (func === undefined && coll.includes(true)){
        return true;
    } else if (func === undefined && coll.includes(false)){
        return false;
    }
    let result = true;
    //check the collection if its an array or object
   if (dataType === "Array"){
        for (let i = 0; i < coll.length; i++){
           if (!(func(coll[i], i, coll))){
             result = false;
           }
        }
    } else if (dataType === "Object"){
        for (let key in coll){
          if (!(func(coll[key], key, coll))){
              result = false;
          }
        }
    }
      //close the loop
  return result;
}
module.exports.every = every;

/**
 * some: Takes a collection (Array or Object) and a Function. Returns true if one
 * item of Array or value of Object returns true or truthy value when passed through
 * the given Function. If no Function is given, returns true if each item or value
 * is itself true or a truthy value.
 * 
 * @param {Array or Object} collection: Array or Object to iterate through.
 * @param {Function}: Function to act upon items or values
 * 
 * @return {Boolean}: True if one item or value returns true or truthy value
 */ 

function some(collection, func){
    /**
     * input: Array or Object, Function
     * output: boolean
     * edge cases: function doesn't return boolean, no function
     * constraints: none
     */
    //array case
    if (Array.isArray(collection)){
      for (let i = 0; i < collection.length; i++){ 
          //function not provided
          if (typeof func !== "function" && collection[i]){
              return true;
          //function provided      
          } else if (typeof func === "function" && func(collection[i], i, collection)){
              return true;
          }
              
      }//end loop
    //object case  
    } else {
        for (let key in collection){
          //function not provided
          if (typeof func !== "function" && collection[key]){
              return true;
          //function provided      
          } else if (typeof func ==="function" && func(collection[key], key, collection)){
            return true;
          }
      } //end loop
        
    } //end conditionals 
  return false;    
}
module.exports.some = some;

/**
 * reduce: Takes an Array and a Function that acts on items in the Array. The function takes as arguments the result 
 * from the function call on the previous item, the current item, and the current item's index. In order to start the 
 * chain of function calls, a seed must be provided to fill the "previous result" argument in the Function's first call. 
 * If no seed is given, the Function will run once on the second item of the Array, using the value of the first item as 
 * its seed. Return the result of the function call on the final item of the array.
 * 
 * @param {Array} array: The Array through which we iterate.
 * @param {Function} func: The Function acting upon the Array's items.
 * @param {*} seed: The initial value of the Function's first argument the first time it's called.
 * 
 * @return {*}: The value of the final Function call on the Array's last object
 */
function reduce (array, func, seed){
 /**
  * input: an array, a function, and a seed
  * output: the final function return value
  * edge cases: if seed is not given
  */
  //create a variable to return
  let result;
  //first check to see if there is a seed
  if (seed === undefined){
      //if there is not, run the function with the first element acting as the seed
      let result1 = func(array[0], array[1], 1);
      //after we have the first result, we can loop through the rest of the array starting at
      //index 2 and running the function
      for (let i = 2; i < array.length; i++){
          result1 = func(result1, array[i], i);
      }//then set the final function return equal to the result
      result = result1;
  } else {
      //if there is a seed available then we start running the function with the given seed and array[0]
      let result2 = func(seed, array[0], 0);
      for (let i = 1; i < array.length; i++){
          //then we continue to run the function while looping through the array
          result2 = func(result2, array[i], i);
      }//then set the final function return equal to the result
      result = result2;
  }
    //return the final result
return result;
}; 
module.exports.reduce = reduce;

/**
 * extend: Takes two Objects as parameters and copies the properties from the first Object into the 
 * second Object. If more than two Objects are provided, it moves the properties of those Objects into
 * the first Object as well, in the order that they apear as arguments. 
 * 
 * @param {Object} obj1: The Object to take additional properties
 * @param {Object} obj2: The Object to lends its properties to the first
 * @param {Array} ...theObjects: Array of Objects that holds any additional Objects provided in argument
 * 
 * @return {Object}: The first object provided in argument with its added properties
 */
function extend(obj1, obj2, ...theObjects){
    /**
     * input: 2 or more objects
     * output: first object
     * constraints: none
     * edge cases: more than two objects
     */
    //search through obj2 
    for (let key in obj2){
        //copy properties into obj1
        obj1[key] = obj2[key];
    }//end loop
    //account for more arguments
    //loop through theObjects array
    for (let i = 0; i < theObjects.length; i++){
        //loop through each object in array
        for (let key in theObjects[i]){
            //copy properties into obj1
            obj1[key] = theObjects[i][key];
        } //end nested loop
    }//end parent loop
    return obj1;
}
module.exports.extend = extend;
 