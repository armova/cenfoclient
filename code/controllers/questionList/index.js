var fs = require("fs")

var ItemTemplate = require("./item")

var el;

Pregunta = require("../../models/pregunta")

function init(target){
	el = document.getElementById(target);
	Pregunta.bind("refresh", render);
}
function render(){

	var str = ""
	for (var i = Pregunta.all().length - 1; i >= 0; i--) {
		var pregunta = Pregunta.all()[i]
		str += ItemTemplate(pregunta)
		console.log(pregunta)
	};
	el.innerHTML = str;

	//Run Animated Form Fields
	(function() {
		var formWrap = document.getElementById( 'fs-form-wrap' );
		new FForm( formWrap, {
			onReview : function() {
			classie.add( document.body, 'overview' ); // for demo purposes only
			}
		} );
	})();

	//Run WsTransmitter when Answer is Clicked
	var WsTransmitter = require('../wsTransmitter');
	var questionButtons = document.getElementsByClassName("btnQuestion")

	for(i=0; i<= questionButtons.length -1; i++){
		questionButtons[i].addEventListener("click", function(e){
			WsTransmitter.emit("sendMsg");
		});
	}

	//Show Wifi Time Plus when answer is clicked
	var optionItem = document.querySelectorAll(".fs-form-full .fs-radio-group span")
	for(i=0;i<=optionItem.length -1; i++){
		optionItem[i].onclick = function(e){
			var plusWifiItem = document.querySelector(".timePlus")
			plusWifiItem.classList.add('show')
			setTimeout(function(){
				plusWifiItem.classList.remove('show')
			},2500)
		}
	}
}

module.exports = init;