//APARTADO 1

function invert(o) {
	return Object.entries(o).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {});
}



// APARTADO 2


