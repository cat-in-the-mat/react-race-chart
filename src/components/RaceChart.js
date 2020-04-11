import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import useInterval from '../customHooks/useInterval';
import Bars from './Bars';
import ProgressBar from './ProgressBar';
import '../styles/RaceChart.scss';

// Returns an object that contains the interpolated value
// of each given bar at the given uptimeTick.
function interpolateBarVals(bars, uptimeTick, timeTick) {
  const startIndex = Math.floor(uptimeTick / timeTick);
  const endIndex = startIndex + 1;
  const ratio = (uptimeTick % timeTick) / timeTick;

  const interpolatedVals = {};

  for (let [name, values] of Object.entries(bars)) {
    const startVal = values[startIndex];
    const endVal = values[endIndex];
    const valChange = ratio * (endVal - startVal);
    interpolatedVals[name] = startVal + valChange;
  }

  return interpolatedVals;
}

function RaceChart(props) {
  const [uptimeTick, setUptimeTick] = useState(0);
  const [isTicking, setIsTicking] = useState(true);

  const totalTick = (props.data.time.length - 1) * props.settings.timeTick;

  useInterval(() => {
    setUptimeTick((uptimeTick + props.settings.fineTick) % totalTick);
  }, isTicking ? props.settings.fineTick : null);

  const barVals = interpolateBarVals(props.data.bars, uptimeTick, props.settings.timeTick);
  const timeIndex = Math.floor(uptimeTick / props.settings.timeTick);
  const currentTime = props.data.time[timeIndex];

  return (
    <div className="rc-container" style={{ width: props.settings.width }}>
      <Bars
        barVals={barVals}
        currentTime={currentTime}
        numberOfBars={props.settings.numberOfBars}
        animDur={props.settings.fineTick}
      />
      <FontAwesomeIcon
        icon={isTicking ? faPause : faPlay}
        onClick={() => { setIsTicking(!isTicking) }}
      />
      <ProgressBar
        uptimeTick={uptimeTick}
        totalTick={totalTick}
      />
    </div>
  );
}

export default RaceChart;