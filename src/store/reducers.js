import { VALIDATE_ATTACK } from '../constants';
import { cloneDeep } from 'lodash';

export const reducer = (state, action) => {
  switch (action.type) {
    case VALIDATE_ATTACK: {
      const shipIndex = action.payload;
      const layout = cloneDeep(state.layout);
      let results = cloneDeep(state.results);

      layout[shipIndex].hits++;
      if (layout[shipIndex].hits >= layout[shipIndex].positions.length) {
        layout[shipIndex].destroyed = true;
      }
      const gameOver = !layout.some(ship => ship.destroyed === false);
      if (gameOver) {
        results = { ...results, player1: results.player1 + 1 };
      }

      return { ...state, layout, gameOver, results };
    }
    default:
      return state;
  }
};
