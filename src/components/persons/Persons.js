import React from 'react';
import Person from './person/Person';

const Persons = props => (
  <div>
    {props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => props.clicked(index)}
          changed={event => props.changed(event, person.id)}
          {...person}
        />
      );
    })}
  </div>
);

export default Persons;
