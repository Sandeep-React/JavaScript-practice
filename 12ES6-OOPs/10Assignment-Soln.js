//Constructor function
/*let CreateRoom = function(name) {
    this.room = `${name}'s room`;
  }
  
  CreateRoom.prototype.cleanRoom = function(soap) {
    console.log(`Cleaning ${this.room} with ${soap}`);
  }
  
  const nabsRoom = new CreateRoom('Nabendu');
  const shikhaRoom = new CreateRoom('Shikha');
  
  nabsRoom.cleanRoom('Domex');
  shikhaRoom.cleanRoom('Lizol');*/

  //ES6 classes with constructor
class CreateRoom {
    constructor(name){
      this.room = `${name}'s room`;
    }
    
    cleanRoom(soap){
      console.log(`Cleaning ${this.room} with ${soap}`);
    }
  }
  
  const nabsRoom = new CreateRoom('Nabendu');
  const shikhaRoom = new CreateRoom('Shikha');
  
  nabsRoom.cleanRoom('Domex');
  shikhaRoom.cleanRoom('Lizol');