function add()
{
	var input = document.getElementById("inputTextValue").value;
	var a = input;
	var d = document.createElement('DIV');
	var c = document.getElementById('main');
		for (var i = 0; i < a; i++) {
	var c = document.getElementById('main');
		var d = document.createElement('DIV');
		c.appendChild(d);


		}

 
	
}
function rolwe() {

var c = document.getElementById("main");
var atr = document.getElementsByClassName("ceks");

if (!atr.checked && atr.value == null) {

	c.style.animation = "1s linear 0s normal none infinite running rot";
	a = atr.value = 5;
	}

	else{

	if (!atr.checked && atr.value == 5) {
		a = atr.value = null;
	c.style.animation = "";
}
	}

}

function hide() {
	var e = document.getElementById("progress_bar");
	var chek = document.getElementsByClassName('hideCheks');

if (!chek.checked && chek.value == undefined) {
	e.style.display = "none";
	a = chek.value = 5;
	
	}

	else{

	if (!chek.checked && chek.value == 5) {
		a = chek.value = undefined;
	    e.style.display = "";
	
}
	}


}
