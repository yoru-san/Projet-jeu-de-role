this.Character = function (game, map) {
  // Propriétés du pacman
  var position  = null,
  direction = null,
  eaten     = null,
  due       = null,
  lives     = null,
  score     = 5,
  keyMap    = {};
}

// le déplacement en fonction des touches directionnelles
keyMap[KEY.ARROW_LEFT]  = LEFT;
keyMap[KEY.ARROW_UP]    = UP;
keyMap[KEY.ARROW_RIGHT] = RIGHT;
keyMap[KEY.ARROW_DOWN]  = DOWN;

this.setPosition = function(x_pos, y_pos) {
  this.x = x_pos;
  this.y = y_pos;
}
