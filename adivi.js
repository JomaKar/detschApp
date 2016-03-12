var	encabezado, msn;
var	respuesta;
var	posibilidades;
var	pistas;
var pists=false;
var espacio; 
var tablero;


var transparent={image: "img/A.jpg",ok: false}

////////////////////////Objetos(adivinanzas)

var cilantro ={aleman: "Koriander", answer: "cilantro", image:"img/cil.jpg", ok:false};
var cebolla = {aleman: "Zwiebel", answer: "cebolla", image:"img/ceb.jpg", ok:false};
var chuleta ={aleman: "Schweinekotelett",answer: "chuleta de cerdo", image:"img/chul.jpg", ok:false};
var col ={aleman: "Kraut",answer: "col",image: "img/col.jpg", ok:false};
var carne ={aleman: "Fleisch", answer: "carne",image:"img/carne.jpg", ok:false};
var res ={aleman: "Rind",answer: "res", image:"img/carne.jpg", ok:false};
var lata={aleman: "Dose",answer: "lata",image: "img/lata.jpg", ok:false};
var bolsa={aleman: "Beutel",answer: "bolsa",image: "img/bolsa.jpg", ok:false};
var pieza={aleman: "Stücke",answer: "pieza",image: "img/pieza.jpg", ok:false};
var barra={aleman: "Tafel",answer: "barra",image:"img/barra.JPG", ok:false};
var puta={aleman:"hure",answer:"prostituta",answer2:"puta",image:"img/a2.jpg", ok:false}




///////////////Selector de adivinanzas



function random(){

var random= Math.round(Math.random()*10);
return random;

}


	var aleatorio;
	var actual;

//////////////////Funciones

function inicio(){
	espacio = document.getElementById("canvas");
	tablero= espacio.getContext("2d");
	setTimeout(changeText, 2000);
	encabezado= document.getElementById("encabezado");
	respuesta= document.getElementById("respuesta");
	posibilidades = document.getElementById("submit");
	pistas= document.getElementById("pista");
	posibilidades.addEventListener("click",probar);
	msn = document.getElementById("fel");
	pistas.addEventListener("click", mostrar);




}

var adivinanzas=[cilantro.aleman, cebolla.aleman, chuleta.aleman, col.aleman, carne.aleman, 
res.aleman, lata.aleman, bolsa.aleman, pieza.aleman, barra.aleman, puta.aleman];

///////////////////condiciones


function probar(){	

var solucion= respuesta.value;

	if(actual == cebolla.aleman && solucion==cebolla.answer){
	puntuacion();
	}else if(actual == cilantro.aleman && solucion==cilantro.answer){
	puntuacion();
	}else if(actual == chuleta.aleman && solucion==chuleta.answer){
	puntuacion();
	}else if(actual == col.aleman && solucion==col.answer){
	puntuacion();
	}else if(actual == carne.aleman && solucion==carne.answer){
	puntuacion();
	}else if(actual == res.aleman && solucion==res.answer){
	puntuacion();
	}else if(actual == lata.aleman && solucion==lata.answer){
	puntuacion();
	}else if(actual == bolsa.aleman && solucion==bolsa.answer){
	puntuacion();	
	}else if(actual == pieza.aleman && solucion==pieza.answer){
	puntuacion();
	}else if(actual == barra.aleman && solucion==barra.answer){
	puntuacion();
	}else if(actual == puta.aleman && solucion==puta.answer){
	puntuacion();
	}else if(actual == puta.aleman && solucion==puta.answer2){
	puntuacion();
	}else{
		error();
	}
}

var pT=0;



function punt(n){
	pT+=n;
	document.getElementById("fel").innerHTML= "";
	document.getElementById("score").innerHTML= pT;

}


function mostrar(){

	cilantro.imagen= new Image();
	cilantro.imagen.src= cilantro.image;
	cilantro.imagen.onload= confirmar;

	cebolla.imagen= new Image();
	cebolla.imagen.src= cebolla.image;
	cebolla.imagen.onload= confirmar;

	chuleta.imagen= new Image();
	chuleta.imagen.src= chuleta.image;
	chuleta.imagen.onload= confirmar;

	col.imagen= new Image();
	col.imagen.src= col.image;
	col.imagen.onload= confirmar;

	carne.imagen= new Image();
	carne.imagen.src= carne.image;
	carne.imagen.onload= confirmar;

	res.imagen= new Image();
	res.imagen.src= res.image;
	res.imagen.onload= confirmar;

	lata.imagen= new Image();
	lata.imagen.src= lata.image;
	lata.imagen.onload= confirmar;

	bolsa.imagen= new Image();
	bolsa.imagen.src= bolsa.image;
	bolsa.imagen.onload= confirmar;

	pieza.imagen= new Image();
	pieza.imagen.src= pieza.image;									
	pieza.imagen.onload= confirmar;

	barra.imagen= new Image();
	barra.imagen.src= barra.image;	
	barra.imagen.onload= confirmar;

	puta.imagen= new Image();
	puta.imagen.src= puta.image;
	puta.imagen.onload= confirmar;

	transparent.imagen= new Image();
	transparent.imagen.src= transparent.image;	
	transparent.imagen.onload= confirmar;

}

function confirmar(){
	cilantro.ok = true;
	cebolla.ok = true;
	carne.ok = true;
	chuleta.ok= true;
	col.ok = true;
	res.ok = true;
	lata.ok = true;
	bolsa.ok = true;
	pieza.ok = true;
	barra.ok = true;
	transparent.ok= true;
	puta.ok=true;
	dibujar();

}

function dibujar(){

	pists= true;

	if(actual == cebolla.aleman){
	
	tablero.drawImage(cebolla.imagen, 0,0);

	}else if(actual == cilantro.aleman){
	
	tablero.drawImage(cilantro.imagen, 0,0);
	
	}else if(actual == chuleta.aleman){
	
	tablero.drawImage(chuleta.imagen, 0,0);
	
	}else if(actual == col.aleman){
	
	tablero.drawImage(col.imagen, 0,0);
	
	}else if(actual == carne.aleman){
	
	tablero.drawImage(carne.imagen, 0,0);
	
	}else if(actual == res.aleman){
	
	tablero.drawImage(res.imagen, 0,0);

	}else if(actual == lata.aleman){
	
	tablero.drawImage(lata.imagen, 0,0);

	}else if(actual == bolsa.aleman){
	
	tablero.drawImage(bolsa.imagen, 0,0);

	}else if(actual == pieza.aleman){
	
	tablero.drawImage(pieza.imagen, 0,0);

	}else if(actual == barra.aleman){
		
	tablero.drawImage(barra.imagen, 0,0);

	}else if(actual == puta.aleman){
	
	tablero.drawImage(puta.imagen, 0,0);
	
	}

	setTimeout(function(){
	tablero.drawImage(transparent.imagen, 0,0);
	},1500);

}


function puntuacion(){
	if(pists==false){
			document.getElementById("encabezado").innerHTML= "Felicidades, eso es correcto\n tienes 5 puntos";
		setTimeout(function(){
				changeText();
				punt(5);
	},1500);
	}else if(pists==true){
			document.getElementById("encabezado").innerHTML= "Felicidades, eso es correcto\n tienes 3 puntos";
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
	document.getElementById("encabezado").innerHTML= actual;


}

function error(){
	document.getElementById("encabezado").innerHTML= "Esa no es la respuesta correcta, vuelve a intentarlo\n Tienes 3 puntos menos";
	punt(-3);
	setTimeout(function(){
	document.getElementById("encabezado").innerHTML= actual;
	},2800);
}















