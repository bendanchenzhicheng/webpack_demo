var entity = function(){
	function printName(name) {
		console.log(name);
	}
	function Calc(){
		var time = 0;
		function timer(){
			time += 1;
			console.log(time);
		}
		return {
			timer: timer
		}
	}
	return {
		printName: printName,
		Calc: Calc
	}
}();
module.exports = entity;