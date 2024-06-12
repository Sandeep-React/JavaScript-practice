// Data Structures  overview

/* Sources of data
1. From the program itself: Data Written directly in the source code (e.g. status messages)
2. From the UI: Data input from the user or data written in DOM (e.g. tasks in TODO app)
3. From external sources: Data fetched from web API (Application Programming Interface) (e.g. recipe Object)

Whatever data we get from the above sources, we get a Collection of Data.
To play with the data we use Data Structures

When we have a simple list we can go for -----> Arrays or Sets.
When we have key- value pair we go for -------> Objects or maps.

Whenever we make web API calls we get data in the form of JSON- JavaScript Object Notation

Other Data Structures

Built-in
-----------
Weak Map
Weak Set

Non- Built-In
---------------
Stacks
Queues
Linked List
Trees
Hash tables
*/

// Arrays Vs Sets and Objects Vs Maps
/* 
Arrays
------
task = ['Code', 'Eat', 'Code'];

Use when you need ordered List of values (might contain duplicate).
When you need to manipulate data.


Sets
----
task = new Set(['Code', 'Eat', 'Code']);

Use when you need to work with unique values.
Use when high-performance is really important.
Use to remove duplicate from Arrays.

*/
/* 
Object
------
task = {
task: 'code',
date: 'today',
repeat: true
};

More "traditional" key/value store ("abused object").
Easier to write and access value with . and [].

Use when you need to include functions(methods).
Use when working with JSON(Can convert to map).

Maps
----
task = new Map([
['task', 'Code'],
['data', 'today'],
[false, 'start coding!']
]);

Better performance.
Keys can have any data type.
Easy to iterate.
Easy to Compute size.
Use when you simply need to map keys to values.
When you need keys that are not strings.
}
*/