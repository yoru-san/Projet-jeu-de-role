var direction = {
  "BAS"    : 2,
  "GAUCHE" : 4,
  "DROITE" : 6,
  "HAUT"   : 8
}

function character(x=0,y=0,direction=2) {
  this.x = x; //(case)
  this.y = y; //(case)
  this.direction = direction;
  this.name;
  this.id;



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
}
