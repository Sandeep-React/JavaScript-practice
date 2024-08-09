/* Assignment
Create a constructor function called CreateRoom. It takes the person's name and assign it to a room variable. After that,
create a cleanRoom prototype function, that uses this room variable and one additional variable, " soap," to console log 
the statement. Below is the class instance creation and calling the function.

const nabsRoom = new CreateRoom('Nabendu');
const shikhaRoom = new CreateRoom('Shikha');

nabsRoom.cleanRoom('Domex');
shikhaRoom.cleanRoom('Lizol');

The Output -

"Cleaning Nabendu's room with Domex"
"Cleaning Shikha's room with Lizol"

Also, convert the constructor function code to ES6 classes. */


//Constructor Function Version

/*  function CreateRoom(name) {
    this.room = name;
  }
  
  // Adding the cleanRoom method to the prototype of CreateRoom
  CreateRoom.prototype.cleanRoom = function(soap) {
    console.log(`Cleaning ${this.room}'s room with ${soap}`);
  };
  
  // Creating instances of CreateRoom
  const nabsRoom = new CreateRoom('Nabendu');
  const shikhaRoom = new CreateRoom('Shikha');
  
  // Calling the cleanRoom method
  nabsRoom.cleanRoom('Domex');
  shikhaRoom.cleanRoom('Lizol'); */

  //ES6 Class Version


  class CreateRoom {
    constructor(name) {
      this.room = name;
    }
  
    cleanRoom(soap) {
      console.log(`Cleaning ${this.room}'s room with ${soap}`);
    }
  }
  
  // Creating instances of CreateRoom
  const nabsRoom = new CreateRoom('Nabendu');
  const shikhaRoom = new CreateRoom('Shikha');
  
  // Calling the cleanRoom method
  nabsRoom.cleanRoom('Domex');
  shikhaRoom.cleanRoom('Lizol');
  


  
  