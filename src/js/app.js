import Game, {
    GameSavingData,
    readGameSaving,
    writeGameSaving,
} from '../game/game.js';

export function greet(name) {
  return `Привет, ${name}!`;
}

const game = new Game();
game.start();