import React, { Component } from 'react';
import Clock from './Clock';
import Nav from './Nav';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'May 18, 2018',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>

        <div className="App container">
          <div className="jumbotron">
            <div className="App-title">
              <h1>Let's Get MCNASTY!</h1>
              <h2>Amanda & Justin's Wedding Countdown</h2>
              <h3>{this.state.deadline}</h3>
            </div>
            <Clock deadline={this.state.deadline} />
            <Form inline>
              <FormControl
                className="Deadline-input"
                placeholder="new date"
                onChange={event => this.setState({ newDeadline: event.target.value })}
              />
              <Button onClick={() => this.changeDeadline()}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
