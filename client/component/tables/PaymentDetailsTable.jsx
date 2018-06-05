import React from 'react';

import styles from './PaymentDetails.css';

const PaymentDetails = () => (
  <div>
    <table className={styles.payment}>
      <h3>Payment details</h3>
      <tr>
        <th>Payment Method</th>
        <th>Preferred / Accepted</th>
      </tr>
      <tr>
        <td>Insert Image</td>
        <td>PayPal Preferred</td>
      </tr>
    </table>
  </div>
);

export default PaymentDetails;
