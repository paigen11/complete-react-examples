import React, { Component } from 'react';
import Person from './person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={() => this.props.clicked(index)}
              changed={event => this.props.changed(event, person.id)}
              {...person}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;
