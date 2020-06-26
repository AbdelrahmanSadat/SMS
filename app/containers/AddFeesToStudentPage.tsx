// * Adds fees to a single student using their ID
// * The fees can be chosen using a predefined payment group,
// * or using a hard value provided by the user

import React, { Component } from 'react';
import AddFeesToStudent from '../components/Payment/AddFees/AddFeesToStudent';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Student, StudentFees, PaymentGroup } from '../utils/database/index';


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
    let paymentGroups = await PaymentGroup.findAll({});
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
    let foundStudent = await Student.findOne({
      where: { id: this.state.formData.studentId }
    });
    // TODO: if there's not student with this id, do an error
    // TODO?: add reference to payment group (id)?
    let createdFees = await StudentFees.create({
      studentId: foundStudent.id,
      // paymentGroupId: this.state.formData.id,
      value: this.state.formData.value,
      name: this.state.formData.name
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
