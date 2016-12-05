
function Character (){
    
    this.name = "test";
    this.x = 5;
    this.y = 6;
    this.direction;
    this.keymap;
    
    this.setPosition = function(x_pos, y_pos){
        this.x_old = this.x;
        this.y_old = this.y;
        
        this.x = x_pos;
        this.y = y_pos;
        
        this.getDirection(this.x_old, this.y_old, this.x, this.y);
    }
    
    this.getDirection = function(x_old, y_old, x, y){
        
        if (x - x_old != 0){
            
            switch (x - x_old){
                case 1: 
                    this.direction = 2;
                    break;
                case -1: 
                    this.direction = 3;
                    break;
                default: 
                    alert("Erreur direction fdp en x");
            }
        }
        else if (y - y_old != 0){
             switch (y - y_old){
                case 1: 
                     this.direction = 1;
                     break;
                case -1: 
                     this.direction = 0;
                     break;
                default: 
                     alert("Erreur direction fdp en y");
             }
        }
        else{
            alert("Erreur calcul direction : cases non adjacentes")
        }
    }
    
}
