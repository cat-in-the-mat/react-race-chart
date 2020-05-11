import React from 'react';
import ReactDOM from 'react-dom';
import RaceChart from './components/RaceChart';

const settings = {
  timeTick: 5000,
  fineTick: 1000,
  numberOfBars: 3,
  width: "700px"
};

ReactDOM.render(<RaceChart
  settings={settings}
  dataUrl='http://localhost:3000/data.csv'
/>, document.getElementById('root'));