// * Creates a payment group

import React, { Component } from 'react';
import AddPaymentGroup from '../components/Payment/AddPaymentGroup/AddPaymentGroup';
import { createPaymentGroup } from '../utils/api/db/addPaymentGroupPage';
import genericInputHandler from '../utils/misc/genericInputHandler';

class AddPaymentGroupPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }
  state = {
    paymentGroupData: {
      paymentName: '',
      paymentValue: '',
    },
  };

  inputHandler = genericInputHandler;

  async onSubmit(e) {
    e.preventDefault();
    let createdPaymentGroup = await createPaymentGroup({
      name: this.state.paymentGroupData.paymentName,
      value: this.state.paymentGroupData.paymentValue,
    });
  }

  render() {
    return (
      <div>
        <AddPaymentGroup
          paymentGroupData={this.state.paymentGroupData}
          inputHandler={(e, d) => this.inputHandler(e, d, 'paymentGroupData')}
          onSubmit={(event) => this.onSubmit(event)}
        />
      </div>
    );
  }
}

export default AddPaymentGroupPage;
