let msg = "";

let jugadas = ["tijeras", "papel", "piedra"];

let numeroRandom = Math.floor(Math.random() * 3);

msg.jugadaMaquina = jugadas[numeroRandom];


if (msg.jugador === "papel" && msg.jugadaMaquina === "papel") {
    msg.resultadoPartida = "Ha sido un empate";

} else if (msg.jugador === "piedra" && msg.jugadaMaquina === "papel") {
    msg.resultadoPartida = "Has perdido";

} else if (msg.jugador === "tijeras" && msg.jugadaMaquina === "papel") {
    msg.resultadoPartida = "Has ganado";

} else if (msg.jugador === "papel" && msg.jugadaMaquina === "piedra") {
    msg.resultadoPartida = "Has ganado";

} else if (msg.jugador === "piedra" && msg.jugadaMaquina === "piedra") {
    msg.resultadoPartida = "Ha sido un empate";

} else if (msg.jugador === "tijeras" && msg.jugadaMaquina === "piedra") {
    msg.resultadoPartida = "Has perdido";

} else if (msg.jugador === "papel" && msg.jugadaMaquina === "tijeras") {
    msg.resultadoPartida = "Has ganado";

} else if (msg.jugador === "piedra" && msg.jugadaMaquina === "tijeras") {
    msg.resultadoPartida = "Has perdido";

} else if (msg.jugador === "tijeras" && msg.jugadaMaquina === "tijeras") {
    msg.resultadoPartida = "Has sido un empate";

}

msg.payload = msg.resultadoPartida || 'Review this code :(';
return msg;