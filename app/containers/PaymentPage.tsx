// * Fee payment

import React, { Component } from 'react';
import Payment from '../components/Payment/Payment';
import genericInputHandler from '../utils/misc/genericInputHandler';
import {findFees, payFee} from '../utils/api/db/paymentPage/';
import { Table } from 'semantic-ui-react';

// TODO: adding to income

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    formData: {
      id: '',
    },
    fees: [],
  };

  inputHandler = genericInputHandler;

  // * Finds the fees for a certain student using their id
  async submitHandler(e) {
    e.preventDefault();
    // the + converts the string ID into a number
    let foundFees = await findFees(+this.state.formData.id);
    this.setState({ fees: foundFees });
  }

  // * Sets the fee record's paid field to true
  // * and removes that fee from the state
  async payClickHandler(e, id) {
    let fee = this.state.fees.find((fee, index) => fee.id == id);
    payFee(fee);
    // remove it from the fees array in state, or go fetch the whole
    // damn thang again
    let foundFees = await findFees(+this.state.formData.id);

    this.setState({ fees: foundFees });
  }

  render() {
    var table = this.state.fees.map((fee, index) => {
      return (
        <Table.Row>
          <Table.Cell>{fee.name}</Table.Cell>
          <Table.Cell>{fee.value} EGP</Table.Cell>
          <Table.Cell>
            <button onClick={(e) => this.payClickHandler(e, fee.id)}>
              Pay
            </button>
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div>
        <Payment
          formData={this.state.formData}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          submitHandler={(e) => this.submitHandler(e)}
          table={table}
        />
      </div>
    );
  }
}

export default PaymentPage;
