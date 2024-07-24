const rest = new Map();
    rest.set('name','Indian palace');
    rest.set(1,"New Delhi");
    rest.set(2,'Mumbai');
    rest.set(0,'Hyderabad');
    rest.set('categories',["Indian","Punjabi","Chinese","Mexican"]).set('close',23).set(true,"we are Open :D");
     console.log(rest.get('0'));


     const arr = [1, 2, 3, 4];
const mappedArr = arr.map(val => {
  for (let i = 0; i < val; i++) {
    console.log(i);
  }
});