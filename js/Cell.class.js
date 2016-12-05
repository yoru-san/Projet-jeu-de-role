function Cell(x_pos, y_pos){

    this.x = x_pos;
    this.y = y_pos;
    this.id = "c"+this.x+"-"+this.y;
    this.patGum = false;
    this.wall = false;
}

function addwall(x,y) {
    return cell.wall(x,y) = true;
}

function getIdFromPosition(x,y) {
  cell.x(x,y) = x;
  cell.y(x,y) = y;
}
