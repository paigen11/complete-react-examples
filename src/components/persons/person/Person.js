import React, { Component } from 'react';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // allows React to connect the component
  // automatically behind the scenes
  // and you can use it in lifecycle methods too
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <div>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log In</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name}, and I am {this.props.age} years old.
        </p>
        {this.props.hobby ? <p>{this.props.hobby}</p> : null}
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
