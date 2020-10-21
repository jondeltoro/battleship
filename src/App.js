import React from 'react';
import { initialState, storeFactory } from './store';
import { Provider } from 'react-redux';
import Dashboard from './components/containers/dashboard';
import Score from './components/containers/score';
import Ships from './components/containers/ships';
import './App.scss';

function App() {
  const store = storeFactory(initialState);
  return (
    <Provider store={store}>
      <div className="App">
        <div className="dashboard-wrapper">
          <Dashboard />
        </div>
        <div className="control-wrapper">
          <Score />
          <Ships />
        </div>
      </div>
    </Provider>
  );
}

export default App;
