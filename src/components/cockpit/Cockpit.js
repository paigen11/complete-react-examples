import React from 'react';

const Cockpit = props => {
  return (
    <div>
      <h1>This is a play ground React App</h1>
      <p>This is working</p>
      <button onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default Cockpit;
