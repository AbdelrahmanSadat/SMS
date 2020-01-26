import React, { Component } from 'react';
import AddFeesToStudent from '../components/Payment/AddFees/AddFeesToStudent';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Student, StudentFees, PaymentGroup } from '../utils/database/index';

// !Payment group reference in student fees is a bad idea
// ! because i believe there can't be the same combination
// ! of joined tables refs(e.g studentId:1, pgID:2 more than once)
// ! which doesn't fit with our use case
// * I believe this issue has been resolved
// * Check to make sure

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
      id:null
    },
    paymentGroups: []
  };

  inputHandler = genericInputHandler;

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

  async componentDidMount() {
    let paymentGroups = await PaymentGroup.findAll({});
    this.setState({ paymentGroups });
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
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

    console.log(createdFees)
    // createdFees=null
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
