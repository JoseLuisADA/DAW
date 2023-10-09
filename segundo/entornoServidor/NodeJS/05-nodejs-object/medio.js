//APARTADO 1

function invert(o) {
	return Object.entries(o).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {});
}

// APARTADO 2

const alumnos = [
  { name: "John", notes: [3, 5, 4] },
  { name: "Jane", notes: [1, 2, 3] },
  { name: "Jim", notes: [] }
];

//APARTADO 3

function getNotaMaxima(alumnos) {
  return alumnos.map(alumno => {
      return {
          name: student.name,
          topNote: student.notes.length > 0 ? Math.max(...student.notes) : 0
      };
  });
}


