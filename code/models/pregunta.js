var _3Model = require("3vot-model/lib/ajaxless")

var fields = ["preguntas","respuestaa","respuestab"];

Pregunta = _3Model.Model.setup("Pregunta", fields);

module.exports = Pregunta