import React, { Component } from 'react';
import './App.css';

import { Button } from './components/ui-semantic.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Standard</Button>
        <Button content="Short Standard" />
        <Button primary content="Primary" />
        <Button secondary content="Secondary" />
        <Button icon="globe" />
        <Button icon="calendar" />
        <Button content="Red" color="red" />
        <Button content="Green" color="green" />
      </div>
    );
  }
}

export default App;
