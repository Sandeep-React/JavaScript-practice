// Logical operators

// there are three logical operators: &&, || , !

/* 
&& --> Both the value must be true to get true
|| --> Any one value muse be true to get true
!  --> Change true to false and false to true
*/

(3 < 1 || 4 == 4)? console.log("true statement"): console.log("false statement");
//false || true -- true

(3 < 1 && 4 == 4)? console.log("true statement"): console.log("false statement")
//false && true -- false

console.log(!1)