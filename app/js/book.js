function Book(){
	var exportName = function(name){
		console.log(name);
	}
	return {
		exportName: exportName
	}
}