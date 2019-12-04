import React, { Component } from 'react';
import AddPaymentGroup from '../components/Payment/AddPaymentGroup/AddPaymentGroup';
import { PaymentGroup } from '../utils/database/index.js';
import genericInputHandler from '../utils/misc/genericInputHandler';

class AddPaymentGroupPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }
  state = {
    paymentGroupData: {
      paymentName: '',
      paymentValue: ''
    }
  };

  inputHandler = genericInputHandler;

  async onSubmit(e) {
    e.preventDefault();
    let createdPaymentGroup = await PaymentGroup.create({
      name: this.state.paymentGroupData.paymentName,
      value: this.state.paymentGroupData.paymentValue
    });
    console.log(createdPaymentGroup);
  }

  render() {
    return (
      <div>
        <AddPaymentGroup
          paymentGroupData={this.state.paymentGroupData}
          paymentName={this.state.paymentGroupData.paymentName}
          paymentValue={this.state.paymentGroupData.paymentValue}
          inputHandler={(e, d) => this.inputHandler(e, d, 'paymentGroupData')}
          onSubmit={event => this.onSubmit(event)}
        />
      </div>
    );
  }
}

export default AddPaymentGroupPage;
