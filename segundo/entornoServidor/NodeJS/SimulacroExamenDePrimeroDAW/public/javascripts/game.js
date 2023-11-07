import Player from './player.js';

export default class Game {
  constructor() {
    this.players = {
      user: new Player('Jugador 1'),
      computer: new Player('Jugador 2'),
    };
    this.currentPlayer = this.players.user; // Empezamos con el usuario como el jugador actual.
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Retorna un número entre 1 y 6.
  }

  playTurn() {
    if (this.currentPlayer === this.players.user) {
      console.log('Es el turno del usuario.');
      // Aquí podrías incluir lógica adicional específica del turno del usuario, como tirar el dado.
    } else {
      console.log('Es el turno del ordenador.');
      // Aquí podrías incluir la lógica de turno del ordenador, que podría ser automática.
    }

    // Simula el lanzamiento del dado.
    const diceRoll = this.rollDice();
    console.log(`El jugador ${this.currentPlayer.name} ha sacado un ${diceRoll}.`);

    // Mueve al jugador basado en el lanzamiento del dado.
    this.currentPlayer.move(diceRoll);

    // Verifica si el jugador ha ganado y pasa al siguiente jugador si no ha ganado.
    if (!this.checkWinCondition()) {
      this.switchPlayer();
    } else {
      this.endGame();
    }
  }

  endGame() {
    console.log(`El jugador ${this.currentPlayer.name} ha ganado!`);
    // Emitir un evento personalizado que 'main.js' pueda escuchar para reiniciar el juego.
    const event = new Event('gameEnded');
    document.dispatchEvent(event);
  }

  updateBoard() {
    // Limpia el tablero antes de actualizar las posiciones.
    document.querySelectorAll('.space').forEach((space) => {
      space.classList.remove('user', 'computer', 'both');
    });

    // Obtiene las posiciones de los jugadores.
    const userPosition = this.players.user.position;
    const computerPosition = this.players.computer.position;

    // Encuentra los elementos del tablero para cada jugador.
    const userPositionElement = document.getElementById(`space-${userPosition}`);
    const computerPositionElement = document.getElementById(`space-${computerPosition}`);

    // Si ambos jugadores están en la misma casilla, incluyendo la casilla inicial (1), colorea en amarillo.
    if (userPosition === computerPosition) {
      const sharedPositionElement = document.getElementById(`space-${userPosition}`);
      if (sharedPositionElement) {
        sharedPositionElement.classList.add('both');
      }
    } else {
      // Colorea individualmente si no están compartiendo casilla.
      if (userPositionElement) userPositionElement.classList.add('user');
      if (computerPositionElement) computerPositionElement.classList.add('computer');
    }
  }

  checkWinCondition() {
    if (this.currentPlayer.position === 63 || this.currentPlayer.position >= 63) {
      console.log(`El jugador ${this.currentPlayer.name} ha ganado!`);
      return true;
    }
    return false;
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.players.user ? this.players.computer : this.players.user;
    console.log(`Ahora es el turno de ${this.currentPlayer.name}.`);
  }
}
