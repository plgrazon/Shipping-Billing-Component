import React from 'react';
import Shipping from './Shipping';

class App extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div>
        <Shipping />
      </div>
    )
  }
}

export default App;
