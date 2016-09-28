var Pregunta = require("../models/pregunta")

function init(){
	var script = document.createElement('script');
	script.src = 'https://spreadsheets.google.com/feeds/list/1XVC7XhAKL-vdvnSdcDJF--DypCbDFco6nDmr4YLhejE/od6/public/values?alt=json-in-script&callback=hooray';
	document.body.appendChild(script);

	window.hooray = function(json) {
		var preguntas = []
		for (var i = json.feed.entry.length - 1; i >= 0; i--) {
			var pregunta = json.feed.entry[i]
			preguntas.push( { 
				pregunta: pregunta["gsx$preguntas"]["$t"],
				respuestaa: pregunta["gsx$respuestaa"]["$t"],
				respuestab: pregunta["gsx$respuestab"]["$t"],
			})
		};
		Pregunta.refresh(preguntas);
		// Pregunta.trigger("DATA_LOADED");
		
	}
}

module.exports = init()

