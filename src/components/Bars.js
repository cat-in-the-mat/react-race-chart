import React from 'react';
import Bar from './Bar';
import Billboard from './Billboard';
import '../styles/Bars.scss';

function Bars(props) {
  const names = Object.keys(props.barVals);
  names.sort((a, b) => props.barVals[b] - props.barVals[a]);

  const maxVal = Math.max(...Object.values(props.barVals));
  const totalVal = Object.values(props.barVals).reduce((prev, curr) => (prev + curr), 0);

  return (
    <div className="rc-bars">
      {Object.entries(props.barVals).map(([name, val]) =>
        <Bar
          key={name}
          name={name}
          val={val}
          maxVal={maxVal}
          order={names.indexOf(name)}
          animDur={props.animDur}
        />
      )}
      <Billboard
        currentTime={props.currentTime}
        totalVal={totalVal}
      />
    </div>
  );
}

export default Bars;