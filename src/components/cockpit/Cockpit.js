import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <div>
      <h1>This is a play ground React App</h1>
      <p>This is working</p>
      <button onClick={props.clicked}>Toggle Persons</button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default Cockpit;
