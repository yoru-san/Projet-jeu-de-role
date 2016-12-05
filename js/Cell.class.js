function Cell(x_pos, y_pos){

    this.x = x_pos;
    this.y = y_pos;
    this.id = "c"+this.x+"-"+this.y;
    this.patGum = false;
    this.wall = false;
    this.Character = false
}

  this.getIdFromPosition = function(x,y) {
    this.x(x,y) = x;
    this.y(x,y) = y;
}

/*  this.life = function () {
    if (this.Character == true and this.patGum == true) {

    }

  } */
  
