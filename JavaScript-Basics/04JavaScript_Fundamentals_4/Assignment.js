// Write a program using loops to first print "Python" and then each alphabet on a separate line.

let course = ["Python"]

for(let i = 0; i < course.length; i++){
    console.log(course[i])
    for(let j = 0; j < course[i].length; j++){
        console.log(course[i][j])
    }
}