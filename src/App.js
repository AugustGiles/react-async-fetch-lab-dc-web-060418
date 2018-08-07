// create your App component here
import React, { Component } from 'react';


class App extends Component {

  state = {
    listOfHumans: []
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then(resp => resp.json())
      .then(list => {
        let names = list.people.map(person => {return person.name})
        this.setState({listOfHumans: names})
      })
      // .then(list => console.log(list.people))
  }

  render() {
    return (
      <ul>
        {this.state.listOfHumans.map(human => {
          return <li>{human}</li>
        })}
      </ul>
    )
  }

}

export default App;
