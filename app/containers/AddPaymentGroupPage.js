import React, { Component } from 'react';
import AddPaymentGroup from '../components/Payment/AddPaymentGroup/AddPaymentGroup';
import { PaymentGroup } from '../utils/database/index.js';

class AddPaymentGroupPage extends Component {
  state = {
    paymentGroupData: {
      paymentName: '',
      paymentValue: ''
    }
  };

  inputHandler(event, input) {
    let paymentGroupDataCopy = { ...this.state.paymentGroupData };
    let temp = event.target.value;
    paymentGroupDataCopy[input] = temp;
    this.setState({ paymentGroupData: paymentGroupDataCopy });
  }

  async onSubmit(e) {
    e.preventDefault();
    let createdPaymentGroup = await PaymentGroup.create({
      name: this.state.paymentGroupData.paymentName,
      value: this.state.paymentGroupData.paymentValue
    })
    console.log(createdPaymentGroup)
  }

  render() {
    return (
      <div>
        <AddPaymentGroup
          paymentGroupData={this.state.paymentGroupData}
          paymentName={this.state.paymentGroupData.paymentName}
          paymentValue={this.state.paymentGroupData.paymentValue}
          inputHandlerPaymentName={event =>
            this.inputHandler(event, 'paymentName')
          }
          inputHandlerPaymentValue={event =>
            this.inputHandler(event, 'paymentValue')
          }
          onSubmit={(event)=>this.onSubmit(event)}
        />
      </div>
    );
  }
}

export default AddPaymentGroupPage;
