import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  let game = new Game();
  game.updateBoard();

  const rollDiceBtn = document.getElementById('rollDiceBtn');
  rollDiceBtn.addEventListener('click', () => {
    game.playTurn();
    game.updateBoard(); // Actualiza el tablero después de jugar el turno.
  });

  // Escuchar el evento personalizado 'gameEnded' para reiniciar el juego
  document.addEventListener('gameEnded', () => {
    setTimeout(() => {
      game = new Game(); // Reiniciar el juego creando una nueva instancia de Game.
      game.updateBoard(); // Actualizar el tablero al estado inicial.
    }, 2000); // Espera 2 segundos antes de reiniciar para que los jugadores vean el estado final.
  });
  // Más lógica del juego puede ir aquí, como mostrar un mensaje de victoria, reiniciar el juego, etc.
});
