/*
	class MAP
	cette classe représente une Map
*/
function Map(name, w, h, containerWidth){
	//////// PROPRIÉTÉS /////////
	/////////////////////////////

	// largeur en px du container
	this.containerWidth = containerWidth;
	// largeur en px du border de la cellule
	this.borderWidth = 1;
	// activer debugage de la class (true/false)
	this.debug = false;
	// les cells
	this.cells = {
        
    }


	////////// METHODES /////////
	/////////////////////////////

	/* 	methode log
		console.log() conditionnel : affiche le log si this.debug == true
		name: le nom
	 */
	this.log = function(msg){
		if(this.debug)
			console.log(msg);
	}

	/* 	methode setName
		définir le nom de la map
		name: le nom
	*/
	this.setName = function (name){
		this.name = name;
	};

	/* 	methode setSize
		définir la taille de la grille
		w & h: largeur & hauteur en nb de cellules
	*/
	this.setSize = function (w,h){
		this.w = w;
		this.h = h;
	};

	/* 	methode getHTMLRow
		renvoi le code HTML encapsule un contenu dans une row (une ligne)
		content: le contenu à encapsuler
	*/
	this.getHTMLRow = function (content){
		var out = '';
		out += '<div class="row">';
		out += content;
		out += "</div>\n";
		return out;
	};

	/* 	methode getHTMLTitle
		renvoi le code HTML qui affiche le nom de la grille
	*/
	this.getHTMLTitle = function (){
		var out = '';
		out +=this.getHTMLRow('<h2>'+this.name+'</h2>');
		return out;
	};


	/* 	methode getHTMLCell
		renvoi le code HTML d'une cellule
		x:cooordonnée en abscisse
		y:cooordonnée en ordonnée
		cssClass: class CSS à affecter à la cellule
	*/
	this.getHTMLCell = function(x,y,cssClass){
		this.log(x + ", " + y + ", " + cssClass);
		var out = '';
		var id = 'c' + x + '-' + y;
		var cellWidth = Math.floor((this.containerWidth / this.w) - (this.borderWidth*2));
		var attrObj = {
			style : "width:"+cellWidth+"px; height:"+cellWidth+"px",
			'class':cssClass,
			id:id,
			onClick:"map.onClick('"+id+"')"
		};
		var attributes =objectToAttributes(attrObj);
		out += '<div ' + attributes+'></div>';
		return out;
	};

	/* 	methode drawGrid
		Dessine la grille via document.write
	*/
	this.drawGrid = function(){
		var out = '';
		var cssClass = 'cell';
		out +="<div class='map'>\n";
		out+= this.getHTMLTitle();
		for(i=0; i<this.h; i++){
			for(j=0; j<this.w; j++){
				this.log("coords:"+i+', '+j);
				out+=this.getHTMLCell(j,i,cssClass);
			}
		}
		out +="\n</div>";
		document.write(out);
		this.log(out);
		return out;
	};

	/* fonction saveCellForm
		fonction qui sauve la cell en fonction des infos du formulaire
	*/
	this.saveCellForm = function(formId){
		var el_form = document.querySelector('#'+formId);
		var cellId = el_form[0].value;
		console.log('cellId:'+cellId);

		console.log(el_form.length+ " champs dans le formulaire "+formId);
		this.cells[cellId] = {};
		for(var i=0; i<el_form.length; i++){
			var fieldName = el_form[i].name;
			if(!fieldName)
				continue;
			console.log(
				'name:'+el_form[i].name
				+' '+
				'value:'+el_form[i].value
				+' '+
				'type:'+el_form[i].type
				+' '+
				'id:'+el_form[i].id
			);
			//console.log(el_form[i]);
			var cell = {
				name:el_form[i].name,
				value:el_form[i].value,
				id:el_form[i].id,
				type:el_form[i].type,
			};
			this.cells[cellId][fieldName] = cell;
			/*this.cells[cellId][el_form[i].name] = {
				value:el_form[i].value,
				type:el_form[i].type,
				name:el_form[i].name,
				id:el_form[i].id,
			};*/

		}

		console.log(this.cells);
		localStorage.cells =  JSON.stringify(this.cells);
	}

	// EVENEMENTS
	/////////////////////////////

	this.onClick = function(id_clicked){
		console.log("map.onClick:"+id_clicked);
		//console.log(localStorage.cells);
	};



	////// INITIALISATION ///////
	/////////////////////////////

	// INITIALISATION via SETTERS
	this.setName(name);
	this.setSize(w,h);

	// initilisation des cells
	var nb_cells=0;
	if(localStorage.cells){
		this.cells=JSON.parse(localStorage.cells);
		for(c in this.cells ){
			//console.log(c);
			nb_cells++;
		}
		console.log(nb_cells+' cells chargées');
	}
}
