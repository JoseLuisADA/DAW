//APARTADO 1

function toArray(obj) {
	return Object.entries(obj);
}

//APARTADO 2

function keysAndValues(obj) {
	
	let obj2 = Object.keys(obj)
	let obj3 = Object.values(obj)
	let obj4 = [];

	obj4.push(obj2);
	obj4.push(obj3);

	return obj4;
}