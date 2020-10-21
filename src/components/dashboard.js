import React, { useState } from 'react';
import './dashboard.scss';
import { cloneDeep, isEqual } from 'lodash';
import missImg from '../assets/miss.png';
import hitImg from '../assets/hit.png';

export const Dashboard = props => {
  const { dashboardSize: size } = props;
  const [activeDashboard, setActiveDashboard] = useState(new Array(size).fill(0).map(() => new Array(size).fill(-1)));
  const attack = (x, y) => {
    const { layout, gameOver, validateAttack } = props;
    const tmpActiveDashboard = cloneDeep(activeDashboard);
    if (gameOver || tmpActiveDashboard[x][y] >= 0) {
      return;
    }
    let hit = 0;
    layout.forEach((ship, shipIndex) =>
      ship.positions.forEach(pos => {
        if (isEqual(pos, [x, y])) {
          validateAttack(shipIndex);
          hit = 1;
        }
      })
    );
    tmpActiveDashboard[x][y] = hit;
    setActiveDashboard(tmpActiveDashboard);
  };

  return (
    <div className="dashboard">
      {activeDashboard.map((col, x) => (
        <div className="row" key={`col-${x}`}>
          {col.map((row, y) => (
            <div className="col" key={`${x}-${y}`} onClick={() => attack(x, y)}>
              {row === 0 ? (
                <img className="asset miss" alt="miss" src={missImg} />
              ) : row === 1 ? (
                <img className="asset hit" alt="hit" src={hitImg} />
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Dashboard.defaultProps = {
  dashboardSize: 10,
};
