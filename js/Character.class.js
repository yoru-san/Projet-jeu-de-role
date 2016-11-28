function Character (){
    
    this.name = "test";
    this.x = 0;
    this.y = 0;
    
    this.setPosition = function(x_pos, y_pos){
        this.x = x_pos;
        this.y = y_pos;
    }
    
}