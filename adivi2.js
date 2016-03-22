$(function(){

var	encabezado= $('h1');
var	respuesta= $('#respuesta');
var	posibilidades= $('#submit');
var	pistas=$('#pista');
var pists=false;
var der=$( "#der" ).val();
var das=$( "#das" ).val();
var die=$( "#die" ).val();
var espacio=$('#canvas')[0].getContext('2d'); 

posibilidades.click(probar);
pistas.click(mostrar);

var transparent={image: "img/A.jpg",ok: false}

////////////////////////Objetos(adivinanzas)

var cilantro ={aleman: "Koriander", gen:"Der",answer: "cilantro", image:"img/cil.jpg", ok:false};
var cebolla = {aleman: "Zwiebel", gen:"Die" ,answer: "cebolla", image:"img/ceb.jpg", ok:false};
var chuleta ={aleman: "Schweinekotelett",gen: "Das" ,answer: "chuleta de cerdo", image:"img/chul.jpg", ok:false};
var col ={aleman: "Khol",gen: "Der" ,answer: "col",image: "img/col.jpg", ok:false};
var carne ={aleman: "Fleisch", gen: "Das" ,answer: "carne",image:"img/carne.jpg", ok:false};
var res ={aleman: "Rind",gen:"Das",answer: "res", image:"img/carne.jpg", ok:false};
var lata={aleman: "Dose",gen: "Die" ,answer: "lata",image: "img/lata.jpg", ok:false};
var bolsa={aleman: "Beutel",gen: "Der" ,answer: "bolsa",image: "img/bolsa.jpg", ok:false};
var pieza={aleman: "Stück",gen:"Das",answer: "pieza",image: "img/pieza.jpg", ok:false};
var barra={aleman: "Tafel",gen:"Die",answer: "barra",image:"img/barra.JPG", ok:false};
var puta={aleman: "hure",gen:"Die",answer:"prostituta",answer2:"puta",image:"img/a2.jpg", ok:false};
var pepinos= {aleman:"Gurke", gen:"Die",answer:"pepinos", image:"img/pep.jpg", ok:false};
var plato= {aleman:"Teller", gen:"Der",answer:"plato", image:"img/teller.jpg", ok:false};
var platillo= {aleman:"Gericht", gen:"Das",answer:"platillo", image:"img/gericht.png", ok:false};
var cajon= {aleman:"Schublade", gen:"Die",answer:"cajón", image:"img/caj.jpg", ok:false};
var pera= {aleman:"Birne", gen:"Die",answer:"pera", image:"img/Birne.jpeg", ok:false};
var gasolina= {aleman:"Benzin",gen:"Das",answer:"gasolina", image:"img/benzin.jpg", ok:false};
var boliche= {aleman:"Kegelspiel", gen:"Das",answer:"boliche", image:"img/kegeln.jpg", ok:false};
var traje= {aleman:"Anzug", gen:"Der" ,answer:"traje", image:"img/anzug.jpg", ok:false};
var calcetines= {aleman:"Strümpf",gen:"Der", answer:"calcetines", image:"img/strümpfe.jpg", ok:false};
var chaqueta= {aleman:"Jacke",gen:"Die", answer:"chaqueta", image:"img/jacke.jpg", ok:false};
var gorro= {aleman:"Mütze", gen:"Die",answer:"gorro", image:"img/mütze.jpg", ok:false};
var camisa= {aleman:"Hemd", gen:"Das",answer:"camisa", image:"img/hemd.jpg", ok:false}
var pantalon= {aleman:"Hose", gen:"Die",answer:"pantalón", image:"img/hose.jpg", ok:false}


var adivinanzas=[cilantro, cebolla, chuleta, col, carne, 
res, lata, bolsa, pieza, barra, puta,plato,
platillo,
cajon,
pera,
gasolina,
boliche,
traje,
calcetines, 
chaqueta,
gorro,
camisa
 ];



///////////////Selector de adivinanzas
function random(){

var random= Math.round(Math.random()*22);
return random;

}


	var aleatorio;
	var actual;

//////////////////Funciones


setTimeout(changeText, 2000);


function probar(){		

var solucion= respuesta.val();

console.log(respuesta.val());

	if(solucion==actual.answer){
	puntuacion();}
	else{
		error();
	}
}

var pT=0;



function punt(n){
	pT+=n;
	$("#score").html(pT);

}


function mostrar(){

	actual.imagen= new Image();
	actual.imagen.src= actual.image;
	actual.imagen.onload= confirmar;

	transparent.imagen= new Image();
	transparent.imagen.src= transparent.image;	
	transparent.imagen.onload= confirmar;
}

function confirmar(){
	actual.ok = true;
	dibujar();

}

function dibujar(){

	pists= true;
	
	espacio.drawImage(actual.imagen, 0,0);


	setTimeout(function(){
	espacio.drawImage(transparent.imagen, 0,0);
	},1500);

}


function puntuacion(){
	if(pists==false){
		encabezado.html("Felicidades, eso es correcto\n tienes 5 puntos");
		setTimeout(function(){
				changeText();
				punt(5);
	},1500);
	}else if(pists==true){
			encabezado.html("Felicidades, eso es correcto\n tienes 3 puntos");
		setTimeout(function(){
				changeText();
				punt(3);
	},1500);
	}

	pists= false;
}


function changeText(){

	aleatorio= random();
	actual= adivinanzas[aleatorio];
	encabezado.html(actual.aleman);
	console.log(actual.answer);


}

function error(){
	encabezado.html("Esa no es la respuesta correcta, vuelve a intentarlo\n Tienes 3 puntos menos");
	punt(-3);
	setTimeout(function(){
	encabezado.html(actual.aleman);
	},2800);
}




})



