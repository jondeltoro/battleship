import React from 'react';
import './score.scss';

export const Score = props => {
  const { player1, player2 } = props.results;
  return (
    <div className="score-wrapper">
      <div className="score">
        <div className="player player1">
          <div className="count">{String(player1).padStart('2', '0')}</div>
          <hr></hr>
          <div className="name">player 1</div>
        </div>
        <div className="player player2">
          <div className="count">{String(player2).padStart('2', '0')}</div>
          <hr></hr>
          <div className="name">player 2</div>
        </div>
      </div>
    </div>
  );
};

Score.defaultProps = {
  results: {
    player1: 0,
    player2: 0,
  },
};
