'use strict;'

function showMenu(){
	var id;
	var em = -20;
	function update(){
		em += 2;
		document.getElementById("menu").style.right = em +"em";
		id = window.requestAnimationFrame(update);
		if(em >= 0){
			document.getElementById("menu").style.right = "0em";
			window.cancelAnimationFrame(id);
			delete em, id, update;
		}
	}
	window.requestAnimationFrame(update);
	toggleMenu = hideMenu;
}
function hideMenu(){
	var id;
	var em = 0;
	function update(){
		em -= 2;
		document.getElementById("menu").style.right = em +"em";
		id = window.requestAnimationFrame(update);
		if(em <= -20){
			window.cancelAnimationFrame(id);
			delete id, em, update;
		}
	}
	window.requestAnimationFrame(update);
	toggleMenu = showMenu;
}
var toggleMenu;
toggleMenu = showMenu

// scrolls to section - discarded because I'm too dumb to know how do make it scroll
// displays requested page
function gotoIndex(){
	document.getElementById("index").style.visibility = "visible";
	document.getElementById("about").style.visibility = "hidden";
	document.getElementById("contact").style.visibility = "hidden";
	
	currentSection("Inicio");
	hideMenu();
}

function gotoAbout(){
	document.getElementById("index").style.visibility = "hidden";
	document.getElementById("about").style.visibility = "visible";
	document.getElementById("contact").style.visibility = "hidden";
	currentSection("Acerca de");
	hideMenu();
}

function gotoContact(){
	document.getElementById("index").style.visibility = "hidden";
	document.getElementById("about").style.visibility = "hidden";
	document.getElementById("contact").style.visibility = "visible";
	
	
	currentSection("Contacto");
	hideMenu();
}

// changes top-left text with current section name
function currentSection(text){
	document.getElementById("actualPage").innerHTML = text;
}