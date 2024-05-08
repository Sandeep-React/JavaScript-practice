/* 
JavaScript has 8 Datatypes
----------------------------
String: any letter, words, sentence | written inside ' ' or  " "
Number: -1, 1, 0, 0.7
Bigint:
Boolean. true | False
Undefined.
Null.
Symbol.
Object.
*/

b = "JavaScript is awesome"
console.log(typeof(b));

c = - 12.1
console.log(typeof(c));

d = true
console.log(typeof(d));

/* Bigint is a built-in object in JavaScript that provides a way to represent 
whole numbers larger than 2^53-1
*/

e = 97554562456256n
console.log(typeof(e));

f = undefined;
console.log(typeof(f));

g = null;
console.log(typeof(g));//Object
console.log(g);

h = Symbol("id") //Extra properties
console.log(typeof(h))

i = {

    name : "Sandeep",
    role : "Full stack developer"
}

console.log(i.name);
console.log(i.role);