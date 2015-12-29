require("!style!css!../css/index.css");
var content = require('./content.js'),
	Calc = content.Calc;
function Person(){
	var con = new Calc();
	function showName(){
		content.printName('aaron');
	}
	return {
		showName: showName,
		timer: con.timer
	}
}
window.person = new Person();
