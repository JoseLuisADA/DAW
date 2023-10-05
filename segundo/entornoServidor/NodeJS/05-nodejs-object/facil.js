//APARTADO 1

function toArray(obj) {
	return Object.entries(obj);
}

//APARTADO 2

function keysAndValues(obj) {
	
}


let obj = {nombre: "Jose", apellidos: "Luis"}
let obj2 = {nombre: "Luzuriaga", apellidos: "Alanis"}

console.log(Object.keys(obj).concat(Object.values(obj2)))