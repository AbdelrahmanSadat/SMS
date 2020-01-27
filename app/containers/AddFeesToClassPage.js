import React, { Component } from 'react';
import AddFeesToClass from '../components/Payment/AddFees/AddFeesToClass';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Student, StudentFees, PaymentGroup } from '../utils/database/index';
import classOptions from '../constants/classOptions.json';

// !Payment group reference in student fees is a bad idea
// ! because i believe there can't be the same combination
// ! of joined tables refs(e.g studentId:1, pgID:2 more than once)
// ! which doesn't fit with our use case
// ? I believe this issue has been resolved. Make sure, then remove
// ? this comment

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

  async classInputHandler(e, { name, value }, stateKey) {
    let foundStudents = await Student.findAll({
      where: {
        class: value
      }
    });
    console.log(name, value);
    console.log(foundStudents);

    this.setState({
      students: foundStudents
    });

    this.inputHandler(e, { name, value }, stateKey);
  }

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
    console.log(this.state);

    // array holding rows to create
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

    console.log(createdStudentFees);
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
