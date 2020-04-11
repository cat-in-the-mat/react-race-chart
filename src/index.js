import React from 'react';
import ReactDOM from 'react-dom';
import RaceChart from './components/RaceChart';

const settings = {
  timeTick: 5000,
  fineTick: 1000,
  numberOfBars: 3,
  width: "700px"
};

const data = {
  time: [1960, 1961, 1962, 1963],
  bars: {
    "Turkey": [100, 3000, 400, 2500],
    "China": [1000, 700, 1000, 3000],
    "Germany": [10, 3000, 2000, 5000],
    "Italy": [300, 5000, 600, 1000]
  }
};

ReactDOM.render(<RaceChart
  settings={settings}
  data={data}
/>, document.getElementById('root'));