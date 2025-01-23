/**
 * * user = It's the player's turn
 *
 * * replaying = Replaying the computer's sequence
 *
 * * initial = Initial value, the player did not started the game yet
 *
 * * paused = The game is paused, the user probably paused the game or lost the focus on the game's window
 *
 * * computer = It's the computer's turn to random a new value and replay the sequence
 */
export type GameStateType =
  | 'user'
  | 'replaying'
  | 'initial'
  | 'paused'
  | 'computer';

/**
 * 1 = Top left button
 * 2 = Top right button
 * 3 = Bottom left button
 * 4 = Bottom right button
 */
export type ValueColorType = 1 | 2 | 3 | 4;
