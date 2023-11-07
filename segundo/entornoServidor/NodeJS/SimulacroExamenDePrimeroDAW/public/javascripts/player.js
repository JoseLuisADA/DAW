class Player {
  constructor(name) {
    this.name = name;
    this.position = 1; // Asumiendo que el juego comienza en la posición 0.
  }

  // Método para mover al jugador un número de espacios.
  move(spaces) {
    this.position += spaces;
    this.applySpecialRules();
  }

  // Aplicar reglas especiales de casillas, como puentes, posadas, etc.
  applySpecialRules() {
    // Supongamos que tenemos un objeto que define las reglas especiales
    const specialRules = {
      6: { type: 'bridge', moveTo: 12 },
      19: { type: 'inn', waitTurns: 2 },
      // ... más reglas especiales ...
    };

    const rule = specialRules[this.position];
    if (rule) {
      switch (rule.type) {
        case 'bridge':
          console.log(`${this.name} ha encontrado un puente. Se ha movido a la casilla ${rule.moveTo}.`);
          this.position = rule.moveTo;
          break;
        case 'inn':
          console.log(`${this.name} debe esperar ${rule.waitTurns} turnos.`);
          // Lógica para manejar la espera de turnos.
          break;
        // ... otros casos para diferentes tipos de reglas ...
        default:
          console.log(`${this.name} has encountered a special space without a rule.`);
      }
    }
  }

  // Método que retorna si el jugador ha ganado.
  hasWon() {
    return this.position === 63; // Asumiendo que 63 es la casilla de llegada.
  }
}

export default Player;
