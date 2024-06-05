// Array Destructuring means to get he values from an array.

// 
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]
console.log(a, b, c)

// Using Destructuring

const [x, y, z] = arr
console.log(x, y, z)
console.log(arr) // It does not change the original array

const restaurant = {
    name : 'Classic Indian',
    location : 'CP, New Delhi, India',
    categories: ['India', 'Punjab', 'Chinese', 'Mexican'],
    starterMenu : ['soup','Fries','Burger', 'Garlic bread'],
    mainMenu: ['Dal makhani', 'Paneer','Soya Chaap'],
    order: function(starterIndex, mainIndex){
            return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    }
} 

let [first, second, third] = restaurant.categories;

console.log(first, second)
console.log(first, second, third)
console.log(first,third)

let [firstItem, , ,fourthItem] = restaurant.starterMenu;
// console.log(firstItem, fourthItem)

// Swaping values

// let temp = firstItem;
// firstItem = fourthItem;
// fourthItem = temp;

// console.log(firstItem, fourthItem)

// Using destructuring

// let [firstItem, , ,fourthItem] = restaurant.starterMenu
  [firstItem, fourthItem] = [fourthItem, firstItem]
 console.log(firstItem, fourthItem) 



console.log(restaurant.order(1, 2))
const [starter, mainCourse] = restaurant.order(2, 1)
console.log(starter, mainCourse)


// Use case for nested array

const nested = [2,4,[5,6]];
// const [i, ,j] = nested;
// console.log(i, j)
const [i, ,[j,k]] = nested;

console.log(i, j, k)


const [p, q, r] = [8, 9];
console.log(p,q,r) // 8 9 undefined

const [ e = 1, f= 1, g= 1] =[8, 9]
console.log(e, f, g) // 8, 9 ,1

