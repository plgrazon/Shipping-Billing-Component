import React from 'react';
import ShippingTable from './Shipping.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div>
        <ShippingTable />
      </div>
    )
  }
}

export default App;
