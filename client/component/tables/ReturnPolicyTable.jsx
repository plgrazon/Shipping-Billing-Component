import React from 'react';

import styles from './ReturnPolicyTable.css';

const ReturnPolicyTable = () => (
  <div>
    <table className={styles.return}>
      <h3>Return Policy</h3>
      <tr>
        <th>After receiving item, contact seller within</th>
        <th>Refund will be given as</th>
        <th>Return shipping</th>
      </tr>
      <tr>
        <td>30 days</td>
        <td>Money back</td>
        <td>Seller pays for return shipping</td>
      </tr>
      <tr>
        <td colspan="3">
          <p>
              Refer to <a href="https://www.ebay.com/help/buying/returns-refunds/return-item-refund?id=4041#section3">eBay Return policy</a>
            for more details. You are covered by the eBay Money Back Guarantee if you receive an item that is not as described in the listing.
          </p>
        </td>
      </tr>
      <tr>
        <th colspan="3">Return policy details</th>
      </tr>
      <tr>
        <td colspan="3">
          All buyers remorse returns or returns for refused delivery will be subject to 20% restocking fee.
          Any items that are returned not complete or with damages pieces will not be refunded.
        </td>
      </tr>
    </table>
  </div>
);

export default ReturnPolicyTable;
