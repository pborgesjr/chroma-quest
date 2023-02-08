/**
 * * playing = It's the player's turn
 *
 * * game over = The player tried to guess a move and lost
 *
 * * waiting = Initial value, the player did not started the game yet
 *
 * * paused = The game is paused, the user probably paused the game or lost the focus on the game's window
 *
 * * computer = It's the computer's turn tu random a new value
 */
export type GameStateType =
  | 'playing'
  | 'game over'
  | 'waiting'
  | 'paused'
  | 'computer';
