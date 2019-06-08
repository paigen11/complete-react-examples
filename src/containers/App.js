import React, { Component } from 'react';

import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Paige', age: 30, hobby: 'Drawing' },
      { id: 2, name: 'Sean', age: 42 },
      { id: 3, name: 'George-Anthony', age: 34 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
