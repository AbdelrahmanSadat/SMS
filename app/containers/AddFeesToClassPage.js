// * Adds Fees to all students that belong to a certain class.
// * The fees can be chosen using a predefined payment group,
// * or using a hard value provided by the user

import React, { Component } from 'react';
import AddFeesToClass from '../components/Payment/AddFees/AddFeesToClass';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Student, StudentFees, PaymentGroup } from '../utils/database/index';
import classOptions from '../constants/classOptions.json';

class AddFeesToClassPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    formData: {
      class: '',
      paymentGroup: '',
      value: '',
      name: '',
      // payment group's id, not used currently
      id: null
    },
    classOptions,
    paymentGroups: [],
    students: []
  };

  inputHandler = genericInputHandler;

  // * Finds all the payment groups to dispay them as options
  // * to the user in order to add them as fees to the students
  // * (The user can always add a hard value instead of choosing
  // * a payment group)
  async componentDidMount() {
    let paymentGroups = await PaymentGroup.findAll({});
    this.setState({ paymentGroups });
  }

  // * When the user chooses a class, finds all students
  // * that belong to that class, then passes control to inpuHandler
  async classInputHandler(e, { name, value }, stateKey) {
    let foundStudents = await Student.findAll({
      where: {
        class: value
      }
    });

    this.setState({
      students: foundStudents
    });

    this.inputHandler(e, { name, value }, stateKey);
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

  // * Creates the fees records using the value and name
  // * the fees provided by the user
  // * TODO?: adding references to the payment group if
  // * TODO?: the user added fees using one
  async onSubmit(e) {
    e.preventDefault();

    // Creates the fees record to add to the db
    let createObjects = this.state.students.map((student, index) => {
      return {
        studentId: student.dataValues.id,
        value: this.state.formData.value,
        name: this.state.formData.name
      };
    });

    // TODO: if there are no students, do an error thingy
    // TODO?: add reference to payment group (id)?
    let createdStudentFees = await StudentFees.bulkCreate(createObjects);
  }

  render() {
    // uses the payment groups found in the db to create input options
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
        <AddFeesToClass
          formData={this.state.formData}
          onSubmit={e => this.onSubmit(e)}
          paymentGroupOptions={paymentGroupOptions}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          classInputHandler={(e, d) => this.classInputHandler(e, d, 'formData')}
          paymentGroupInputHandler={(e, d) =>
            this.paymentGroupInputHandler(e, d, 'formData')
          }
          classOptions={this.state.classOptions}
        />
      </div>
    );
  }
}

export default AddFeesToClassPage;
