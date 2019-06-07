import React, { Component } from 'react';
import Persons from './components/persons/Persons';
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

  // now unused - was used on person to show different data
  // switchNameHandler = newName => {
  //   // console.log('click');
  //   this.setState({
  //     persons: [
  //       { id: 1, name: newName, age: 30 },
  //       { id: 2, name: 'TriniSean', age: 42, hobby: 'Motorcycle riding' },
  //       { id: 3, name: 'GA', age: 33, hobby: 'Personal training' },
  //     ],
  //   });
  // };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangedHandler = (event, id) => {
    // console.log(event.target.value);
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
        <h1>This is a play ground React App</h1>
        <p>This is working</p>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
