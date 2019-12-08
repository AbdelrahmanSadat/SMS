import React, { Component } from 'react';
import AddFeesToSection from '../components/Payment/AddFees/AddFeesToSection';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Student, StudentFees, PaymentGroup, Section } from '../utils/database/index';

// !Payment group reference in student fees is a bad idea
// ! because i believe there can't be the same combination
// ! of joined tables refs(e.g studentId:1, pgID:2 more than once)
// ! which doesn't fit with our use case

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
      sectionName:'',
      // payment group's id, not used currently
      id: null
    },
    sectionOptions:[],
    sections:[],
    paymentGroups: [],
    students: []
  };

  inputHandler = genericInputHandler;

  async SectionInputHandler(e, { name, value }, stateKey) {
    let section = this.state.sections.find((section) => (section.dataValues.name === value))
    
    let foundStudents = await Student.findAll({
      where: {
        sectionId: section.dataValues.id
      }
    });
    console.log('AYOOOOO');
    console.log(section.dataValues.id);
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
    let foundSections = await Section.findAll({});
    let sectionOptions = foundSections.map((section, index) => ({
      // ???stateKey???
      id: section.id,
      value: section.name,
      text: section.name
    }));
    this.setState({ paymentGroups, sectionOptions, sections: foundSections });
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

    console.log(this.state);
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
        <AddFeesToSection
          formData={this.state.formData}
          onSubmit={e => this.onSubmit(e)}
          paymentGroupOptions={paymentGroupOptions}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          sectionInputHandler={(e, d) => this.SectionInputHandler(e, d, 'formData')}
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
