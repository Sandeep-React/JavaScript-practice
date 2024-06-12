/* 
1. Write a function called "mapToSet" that takes a map as its parameter.
   The function should create a new set and add all the keys from the map to the set.
   The function should then return the set.
    
   Here's an example of what the function should do:

   let myMap = new Map();
   myMap.set('apple', 2);
   myMap.set('banana', 4);
   myMap.set('orange', 1);

   let mySet = mapToSet(myMap); // the set should contain 'apple', 'banana', and 'orange

*/
{
function mapToSet(map){
    let set = new Set();
    for (let key of map.keys()) {
        set.add(key);
    }
    return set;
}

let myMap = new Map();
myMap.set('apple', 2);
myMap.set('banana', 4);
myMap.set('Orange', 1);

let mySet = mapToSet(myMap);

console.log(mySet) // Set(3) { 'apple', 'banana', 'Orange' }
}
/* 
2. Write a function called "removeKeyFromMap" that takes a map and a key as its parameters. 
   The function should use the delete method to remove the key-value pair with the given key from the map. 
   The function should then return the modified map.

   Here's an example of what the function should do:

   let myMap = new Map();
   myMap.set('apple', 2);
   myMap.set('banana', 4);
   myMap.set('orange', 1);

   removeKeyFromMap(myMap, 'banana'); // the map should no longer contain the 'banana' key-value pair

*/
{
    function removeKeyFromMap(map, key){
        map.delete(key);
        return map;
    }

   let myMap = new Map();
   myMap.set('apple', 2);
   myMap.set('banana', 4);
   myMap.set('orange', 1);

   removeKeyFromMap(myMap, 'banana');
   
   console.log(myMap)
}
/* 
 3. Write a function called "sumMapValues" that takes a map with numeric values as its parameter. 
    The function should use a for...of loop to iterate over the entries of the map and calculate the sum of all the values.
    
    Here's an example of what the function should do:


    let myMap = new Map();
    myMap.set('apple', 2);
    myMap.set('banana', 4);
    myMap.set('orange', 1);

    sumMapValues(myMap); // 7
*/

function sumMapValues(map){
    let sum = 0;
    for( let [key, value] of map){
        sum += value;
    }
    return sum;
}

let myMap = new Map();
    myMap.set('apple', 2);
    myMap.set('banana', 4);
    myMap.set('orange', 1);

    console.log(sumMapValues(myMap))