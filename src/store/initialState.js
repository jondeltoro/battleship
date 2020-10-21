export const initialState = {
  results: {
    player1: 0,
    player2: 0,
  },
  gameOver: false,
  layout: [
    {
      ship: 'carrier',
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
      hits: 0,
      destroyed: false,
    },
    {
      ship: 'battleship',
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
      hits: 0,
      destroyed: false,
    },
    {
      ship: 'cruiser',
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
      hits: 0,
      destroyed: false,
    },
    {
      ship: 'submarine',
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
      hits: 0,
      destroyed: false,
    },
    {
      ship: 'destroyer',
      positions: [
        [0, 0],
        [1, 0],
      ],
      hits: 0,
      destroyed: false,
    },
  ],
  shipTypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
  },
};
