import React from 'react';
import '../styles/Bar.scss';

function Bar(props) {
  const containerStyle = {
    top: `${props.order * 50 + 50}px`,
    transition: `top ${props.animDur}ms linear`
  };

  const barStyle = {
    width: `${props.val / props.maxVal * 70}%`,
    transition: `width ${props.animDur}ms linear`
  };

  return (
    <div id="barContainer" style={containerStyle}>
      <div id="barName">{props.name}</div>
      <div id="bar" style={barStyle}></div>
      <div id="barVal">{props.val}</div>
    </div>
  );
}

export default Bar;
