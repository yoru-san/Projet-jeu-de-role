function Artefact (x_pos = null, y_pos = null){
    
    this.x;
    this.y;
    
    this.setPosition = function(x_pos, y_pos){
        this.x = x_pos;
        this.y = y_pos;
    }
}

// var Artefact = function(id, nom){
//   this.id = id;
//   this.nom = nom;
//
//   Artefact.prototype.use = function(){
//     console.log(this.nom + " a été utilisé !");
//   }
// }
//
// var artefact = new Artefact(1, "Truc ");
// artefact.use();
// --> Truc a été utilisé
