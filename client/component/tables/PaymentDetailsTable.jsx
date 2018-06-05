import React from 'react';
import styles from './PaymentDetails.css';

import paymentMethods from '../../../static/paypalOptions.jpeg';

const PaymentDetails = () => (
  <div className={styles['payment-outside-border']}>
    <h3>Payment details</h3>
    <table className={styles.payment}>
      <tr className={styles['payment-header']}>
        <th>Payment Method</th>
        <th>Preferred / Accepted</th>
      </tr>
      <tr>
        <td><img src={paymentMethods}/></td>
        <td>PayPal Preferred</td>
      </tr>
    </table>
  </div>
);

export default PaymentDetails;
