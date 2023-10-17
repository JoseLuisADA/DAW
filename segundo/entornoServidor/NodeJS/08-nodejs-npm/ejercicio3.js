import chalk from 'chalk';
function fechaHoraActualFormateada() {

    const ahora = new Date();

    // Formatear la fecha y hora
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript empiezan en 0, así que sumo 1 al getMonth
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    // Colorear en verde si los segundos son multiplos de 10 o se pongan en 0
    let fechaFormateada = `${dia}-${mes}-${anio} `; 
    fechaFormateada += segundos.includes('0') 
        ? chalk.green(`${horas}:${minutos}:${segundos}`) 
        : `${horas}:${minutos}:${segundos}`;

    console.clear(); // Limpiar la consola para que se vea solo la fecha actualizada
   
    console.log(fechaFormateada);



    // Llamar a la función cada segundo
    setInterval(fechaHoraActualFormateada, 1000);

}

fechaHoraActualFormateada();