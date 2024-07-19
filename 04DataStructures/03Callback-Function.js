
//Removes the spaces between the strings
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase()
}
console.log(oneWord("My name is Sandeep Kumar Das"))

//Capitalise the first word

const upperFirstWord = function(str){
    const [first,...other] = str.split(' ');
    return [first.toUpperCase(),...other].join(' ');
}


console.log(upperFirstWord("My name is Sandeep Kumar Das"))

//Higher Order Function

const transformer = function(str, fn){
    console.log(`Original String is: ${str}`)
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by the function: ${fn.name}`)
}

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best", oneWord);


const high5 = function(){
    console.log("👍")
}

document.body.addEventListener('click',high5)