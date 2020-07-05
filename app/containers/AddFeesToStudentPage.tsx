// * Adds fees to a single student using their ID
// * The fees can be chosen using a predefined payment group,
// * or using a hard value provided by the user

import React, { Component } from 'react';
import AddFeesToStudent from '../components/Payment/AddFees/AddFeesToStudent';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { findAllPaymentGroups, createStudentFee } from '../utils/api/db/addFeesToStudentPage';


class AddFeesToStudentPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    formData: {
      studentId: '',
      paymentGroup: '',
      value: '',
      name: '',
      // payment group's id, not used currently
      id: null
    },
    paymentGroups: []
  };

  inputHandler = genericInputHandler;

  // * Finds all the payment groups in order to display
  // * them to the user as input options
  async componentDidMount() {
    let paymentGroups = await findAllPaymentGroups();
    this.setState({ paymentGroups });
  }

  // * Changes the appropriate state values when the user
  // * chooses a payment group
  async paymentGroupInputHandler(e, { name, value }) {
    let paymentGroup = this.state.paymentGroups.find(
      (paymentGroup, index) => paymentGroup.name === value
    );

    let stateFormDataCopy = { ...this.state.formData };
    stateFormDataCopy.id = paymentGroup.id;
    stateFormDataCopy.name = paymentGroup.name;
    stateFormDataCopy.value = paymentGroup.value;

    await this.setState({ formData: stateFormDataCopy });
    // this.inputHandler(e, { name, value }, 'formData');
  }


  // * Creates the fees to add to the student
  async onSubmit(e) {
    e.preventDefault();
    let createdFees = await createStudentFee({
      studentId: this.state.formData.studentId,
      feeName: this.state.formData.name,
      feeValue: this.state.formData.value
    });
  }

  render() {
    let paymentGroupOptions;
    if (this.state.paymentGroups.length > 0) {
      paymentGroupOptions = this.state.paymentGroups.map(
        (paymentGroup, index) => {
          return {
            key: index,
            text: paymentGroup.name,
            value: paymentGroup.name
          };
        }
      );
    }
    return (
      <div>
        <AddFeesToStudent
          formData={this.state.formData}
          onSubmit={e => this.onSubmit(e)}
          paymentGroupOptions={paymentGroupOptions}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          paymentGroupInputHandler={(e, d) =>
            this.paymentGroupInputHandler(e, d, 'formData')
          }
        />
      </div>
    );
  }
}

export default AddFeesToStudentPage;
