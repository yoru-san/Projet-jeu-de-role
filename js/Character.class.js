function Character(game, map) {
  // Propriétés du pacman
  this.position = {},
  this.direction = {
    LEFT: false,
    UP: false,
    RIGHT: false,
    DOWN: false
  },
  this.eaten = false,
  this.due = null,
  this.lives = 3,
  this.score = 5,

  // le déplacement en fonction des touches directionnelles
  this.keyMap = {
    ARROW_LEFT: false,
    ARROW_UP: false,
    ARROW_RIGHT: false,
    ARROW_DOWN: false
  };

  this.setPosition = function(x_pos, y_pos) {
    this.position.x = x_pos;
    this.position.y = y_pos;
  }
}
