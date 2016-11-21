var direction = {
  "BAS"    : 2,
  "GAUCHE" : 4,
  "DROITE" : 6,
  "HAUT"   : 8
}

var character = {
  name : "",
  x : 0,
  y : 0,

  generate = function (name,x,y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.inventory = new Inventory();  
  }

  move = function(direction)  {
    var coord = {'x' : this.x, 'y' : this.y};
    switch(direction) {
      case DIRECTION.BAS :
        this.y++;
      break;
      case DIRECTION.GAUCHE :
        this.x--;
      break;
      case DIRECTION.DROITE :
        this.x++;
      break;
      case DIRECTION.HAUT :
        this.y--;
      break;
    }
  }
};

/*function character(x,y,direction=2) {
  this.x = x; //(case)
  this.y = y; //(case)
  this.direction = direction;
  this.name;
  this.id;

*/


}
