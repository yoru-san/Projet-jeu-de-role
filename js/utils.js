/* fonction getXMLHttpRequest
	instancie un objet XMLHttpRequest
*/
function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}

/* fonction loadHTML
	charge un fichier HTML et place son contenu dans un élément défini par ID
	id: id de l'élément dans lequel afficher la resource chargée
	filename: nom du fichier à charger
	callback :  fonction callback appelée quand le chargement est fini
	loadHTML('detailForm', 'mon-fichier.html')
*/
function loadHTML(id, filename, callback=false){
	var xhr = getXMLHttpRequest();
	xhr.open("GET",filename, true);
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			setHTMLById(id,xhr.responseText);
			if(callback)
				callback();
		}
	};
}

/* fonction setHTMLById
	place le contenu fourni dans dans un élément défini par ID
	id: id de l'element 
	content: contenu à placer
*/
function setHTMLById(id, content){
	var el = document.getElementById(id);
	if(el){
		el.innerHTML = content;
		return true;
	}
	else{
		console.error("setHTMLById: "+id+ " not found");
		return false;
	}
	
}

/* fonction objectToAttributes
	transforme un objet en chaîne de caractères attributs
	ex:
	{	a:'b',
		b:"hello"
	}
	devient
	a="b" b="hello"
*/
function objectToAttributes(obj){
	var attributes='';
	for (var key in obj) {
		//console.log(obj[key]);
		attribute = key+'="'+obj[key]+'" ';
		attributes += attribute;
	}
	return attributes;
}
