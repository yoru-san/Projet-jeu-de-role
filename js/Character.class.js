
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
        
        this.getDirection();
    }
    
    this.getDirection = function(){
        
        var x_dir = this.x - this.x_old;
        console.log(x_dir);
        
        if (x_dir != 0){
            
            switch (x_dir){
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
        else {
            var y_dir = this.y - this.y_old;
            
            if (y_dir != 0){
                switch (y_dir){
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
        switch (this.direction){
            case 0:
                console.log("Nord");
                break;
            case 1:
                console.log("Sud");
                break;
            case 2:
                console.log("Est");
            case 3:
                console.log("Ouest");
        }
    }
    
}
