// * Creates a payment group

import React, { Component } from 'react';
import AddPaymentGroup from '../components/Payment/AddPaymentGroup/AddPaymentGroup';
import { createPaymentGroup } from '../utils/api/db/addPaymentGroupPage';

class AddPaymentGroupPage extends Component {
  async onSubmit(value, formikApi) {
    let createdPaymentGroup = await createPaymentGroup({
      name: value.paymentName,
      value: value.paymentValue,
    });
    console.log(createdPaymentGroup);
  }

  render() {
    return (
      <AddPaymentGroup
        onSubmit={(value, formikApi) => this.onSubmit(value, formikApi)}
      />
    );
  }
}

export default AddPaymentGroupPage;
