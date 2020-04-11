import React from 'react';
import '../styles/Billboard.scss';

function Billboard(props) {
  return (
    <div className="rc-billboard">
      <div>{props.currentTime}</div>
      <div>Total: {props.totalVal}</div>
    </div>
  );
}

export default Billboard;