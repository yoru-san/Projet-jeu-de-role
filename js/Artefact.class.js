function Artefact (){

    this.id;
    this.nom;

    generate = function (id, nom){

        this.id = id;
        this.nom = nom;

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
