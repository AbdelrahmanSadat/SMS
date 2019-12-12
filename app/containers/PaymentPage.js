import React, { Component } from 'react';
import Payment from '../components/Payment/Payment';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { StudentFees } from '../utils/database/index';
import { Table } from 'semantic-ui-react';

// TODO: adding to income

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    formData: {
      id: ''
    },
    fees: []
  };

  inputHandler = genericInputHandler;

  async submitHandler(e) {
    e.preventDefault();
    let foundFees = await StudentFees.findAll({
      where: {
        studentId: this.state.formData.id,
        paid: false
      }
    });
    this.setState({ fees: foundFees });
  }

  async payClickHandler(e, id) {
    let fee = this.state.fees.find((fee, index) => fee.id == id);
    fee.paid = true;
    await fee.save();
    // remove it from the fees array in state, or go fetch the whole
    // damn thang again
    let foundFees = await StudentFees.findAll({
      where: {
        studentId: this.state.formData.id,
        paid: false
      }
    });
    this.setState({ fees: foundFees });
  }

  render() {
    var table = this.state.fees.map((fee, index) => {
      return (
        <Table.Row>
          <Table.Cell>{fee.name}</Table.Cell>
          <Table.Cell>{fee.value} EGP</Table.Cell>
          <Table.Cell>
            <button onClick={e => this.payClickHandler(e, fee.id)}>Pay</button>
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div>
        <Payment
          formData={this.state.formData}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          submitHandler={e => this.submitHandler(e)}
          table={table}
        />
      </div>
    );
  }
}

export default PaymentPage;
