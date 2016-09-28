var fs = require("fs");

var insertCss = require("insert-css");
var css = fs.readFileSync( __dirname + "/assets/style.css" )
insertCss(css);

var Layout = fs.readFileSync( __dirname + "/code/views/layout.html" )
_3vot.el.innerHTML = Layout;

var Pregunta = require("./code/models/pregunta")

require("./code/controllers/gDocLoad")

var questionList = require("./code/controllers/questionList")
questionList("preguntas")







