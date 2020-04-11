import React from 'react';
import '../styles/ProgressBar.scss';

function ProgressBar(props) {
  const percentage = props.uptimeTick / props.totalTick * 100 + '%';

  return (
    <div id="progressBarContainer">
      <div id="progressBarCurrentProgress" style={{ width: percentage }}></div>
    </div>
  );
}

export default ProgressBar;