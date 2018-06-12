import React from 'react';
import styles from './PaymentDetails.css';

const PaymentDetails = () => (
  <div className={styles['payment-outside-border']}>
    <h3>Payment details</h3>
    <table className={styles.payment}>
      <thead>
        <tr className={styles['payment-header']}>
          <th>Payment Method</th>
          <th>Preferred / Accepted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="https://s3.us-east-2.amazonaws.com/shippingbillingcomponent/paypalOptions.jpeg"/></td>
          <td>PayPal Preferred</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PaymentDetails;
