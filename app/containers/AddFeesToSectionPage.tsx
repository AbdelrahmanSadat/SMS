// * Adds fees to all students in a certain section
// * The fees can be chosen using a predefined payment group,
// * or using a hard value provided by the user

import React, { Component } from 'react';
import AddFeesToSection from '../components/Payment/AddFees/AddFeesToSection';
import genericInputHandler from '../utils/misc/genericInputHandler';
import {
  findAllPaymentGroups,
  findAllSections,
  createStudentFees,
  findStudentsWithSectionId
} from '../utils/api/db/addFeesToSectionPage';

class AddFeesToSectionPage extends Component {
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
      sectionName: '',
      // payment group's id, not used currently
      id: null,
    },
    sectionOptions: [],
    sections: [],
    paymentGroups: [],
    students: [],
  };

  inputHandler = genericInputHandler;

  // * Finds all the payment groups, and all the sections
  // * in order to display them as input options to the user.
  async componentDidMount() {
    let paymentGroups = await findAllPaymentGroups();
    let foundSections = await findAllSections();
    // Small inconsistency where the section options are
    // created here, while PG options are created elsewhere
    let sectionOptions = foundSections.map((section, index) => ({
      // ???stateKey???
      id: section.id,
      value: section.name,
      text: section.name,
    }));
    this.setState({ paymentGroups, sectionOptions, sections: foundSections });
  }

  // * Finds the section the user chose from the full list
  // * of sections; And finds all students in that section
  // * and saves them in the state
  async SectionInputHandler(e, { name, value }, stateKey) {
    let section = this.state.sections.find(
      (section) => section.dataValues.name === value
    );

    let foundStudents = await findStudentsWithSectionId(+section.dataValues.id);

    this.setState({
      students: foundStudents,
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

  // * Adds the fee record to the db
  async onSubmit(e) {
    e.preventDefault();

    // array holding rows to create
    let studentFeesData = this.state.students.map((student, index) => {
      return {
        studentId: student.dataValues.id,
        value: this.state.formData.value,
        name: this.state.formData.name,
      };
    });

    createStudentFees(studentFeesData);
  }

  render() {
    let paymentGroupOptions;
    if (this.state.paymentGroups.length > 0) {
      paymentGroupOptions = this.state.paymentGroups.map(
        (paymentGroup, index) => {
          return {
            key: index,
            text: paymentGroup.name,
            value: paymentGroup.name,
          };
        }
      );
    }
    return (
      <div>
        <AddFeesToSection
          formData={this.state.formData}
          onSubmit={(e) => this.onSubmit(e)}
          paymentGroupOptions={paymentGroupOptions}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          sectionInputHandler={(e, d) =>
            this.SectionInputHandler(e, d, 'formData')
          }
          paymentGroupInputHandler={(e, d) =>
            this.paymentGroupInputHandler(e, d, 'formData')
          }
          sectionOptions={this.state.sectionOptions}
        />
      </div>
    );
  }
}

export default AddFeesToSectionPage;
