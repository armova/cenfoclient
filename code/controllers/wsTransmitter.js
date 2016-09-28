var host = '';
var EventEmitter = require('events').EventEmitter
var wsTransmitter = new EventEmitter();
var bowser = require("bowser");
var bName = bowser.browser.name;
var bVersion = bowser.browser.version;

//alert(bowser.browser.name + " " + bowser.browser.version);

//
wsTransmitter.on('sendMsg', function(){
	if( (bName == "Android" && bVersion <= 4.3) || 
	(bName == "Internet Explorer" && bVersion <= 9) ){
		answerByHTTP();
		//alert("HTTP");		
	} else {
		answrByWS();
		//alert("WS!");
	} 
});

function answrByWS(){
	var ws = new WebSocket(host);
    ws.onopen = function() {
    	ws.send('something from cenfo-client');
    	console.log('msg sent');
    }
}

function answerByHTTP(){
	var request = new XMLHttpRequest();
	request.onload = function(){ console.log("answer ok") }
	request.open( "GET", "" );
	request.send();
}

module.exports = wsTransmitter;

/*

*/

