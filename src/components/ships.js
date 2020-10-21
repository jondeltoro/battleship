import React from 'react';
import './ships.scss';
import missImg from '../assets/miss_small.png';
import hitImg from '../assets/hit_small.png';
import carrier from '../assets/carrier.png';
import battleship from '../assets/battleship.png';
import cruiser from '../assets/cruiser.png';
import submarine from '../assets/submarine.png';
import destroyer from '../assets/destroyer.png';

const shipImg = name => {
  switch (name) {
    case 'carrier':
      return carrier;
    case 'battleship':
      return battleship;
    case 'cruiser':
      return cruiser;
    case 'submarine':
      return submarine;
    case 'destroyer':
      return destroyer;
    default:
      return null;
  }
};

export const Ships = props => {
  const { layout } = props;
  return (
    <div className="ships-wrapper">
      <div className="ships">
        {layout.map(({ ship, hits, positions }, index) => (
          <div className="ship-container" key={'ship-' + index}>
            <img className="ship" src={shipImg(ship)} alt={ship} />
            {positions.map((p, index) =>
              index < hits ? (
                <img className="hp" src={hitImg} alt="hp" key={index} />
              ) : (
                <img className="hp" src={missImg} alt="hp" key={index} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
