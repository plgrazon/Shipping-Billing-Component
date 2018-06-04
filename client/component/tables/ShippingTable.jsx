import React from 'react';

const ShippingTable = ({basicRate, expeditedRate, oneDayRate, defaultCountry}) => (
  <div>
    <h3>Shipping and Billing</h3>
    <table>
      <tr>
        <th>Shipping and handling</th>
        <th>Each additional item</th>
        <th>To</th>
        <th>Service</th>
      </tr>
      <tr>
        <td>{`US $${basicRate}.00`}</td>
        <td>free</td>
        <td>{defaultCountry}</td>
        <td>Standard Shipping</td>
      </tr>
      <tr>
        <td>{`US $${expeditedRate}.00`}</td>
        <td>3</td>
        <td>{defaultCountry}</td>
        <td>Expedited Shipping</td>
      </tr>
      <tr>
        <td>{`US $${oneDayRate}.00`}</td>
        <td>5</td>
        <td>{defaultCountry}</td>
        <td>{`One-day Shipping`}</td>
      </tr>
    </table>
  </div>
);

export default ShippingTable;
