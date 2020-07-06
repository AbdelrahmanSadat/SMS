// TODO: refactro this 140+-line container.
// TODO: if payment happens on admission, update
// TODO: income, and create a payment record ?
import React, { Component } from 'react';
import Admission from '../components/Admission/Admission';
import genericInputHandler from '../utils/misc/genericInputHandler';
import classOptions from '../constants/classOptions.json';
import {
  getStudentLastId,
  createStudentWithFees,
  findSectionWithClass,
} from '../utils/api/db/admissionPage';

class AdmissionPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    admissionData: {
      nextStudentID: 0,
      name: '',
      email: '',
      phoneNumber: '',
      school: '',
      address: '',
      parentName: '',
      parentOccupation: '',
      parentPhoneNumber: '',
      class: '',
      section: '',
      payment: '',
      notes: '',
    },
    sections: [],
    sectionOptions: [],
  };

  inputHandler = genericInputHandler;

  // * Fetches the last ID in the student table
  async componentDidMount() {
    // get the last id in the db
    let lastID = await getStudentLastId();
    let admissionDataCopy = { ...this.state.admissionData };
    admissionDataCopy.nextStudentID = lastID + 1;
    this.setState({ admissionData: admissionDataCopy });
  }

  // * Finds all sections using the class value the user chose
  async classInputHandler(e, { name, value }, stateKey) {
    let foundSections = await findSectionWithClass(value);

    // mapping the section model returned from the database
    // into a useful prop for select display
    let sectionOptions = [];
    if (foundSections.length > 0) {
      sectionOptions = foundSections.map((section, index) => ({
        // ???stateKey???
        stateKey: section.id,
        value: section.name,
        text: section.name,
      }));
    }

    this.setState({
      sections: foundSections,
      sectionOptions,
    });

    this.inputHandler(e, { name, value }, stateKey);
  }

  // * Finds and calculates the default fees for the section
  // * by using the section chosen by the user
  async sectionInputHandler(e, { name, value }, stateKey) {
    let section = this.state.sections.find(
      (section, index) => section.name === value
    );
    let { defaultAdmissionFees, defaultMonthlyFees, counter } = section;
    // TODO: this seems like it belongs elsewhere (db maybe)
    let settledFees =
      defaultAdmissionFees + ((8 - counter) * defaultMonthlyFees) / 8;

    // ? removing await breaks it???
    await this.inputHandler(
      e,
      { name: 'payment', value: settledFees },
      stateKey
    );
    this.inputHandler(e, { name, value }, stateKey);
  }

  // * Creates the student record, adds fees to the student,
  // * updates the value of the last ID.
  async onSubmit(e) {
    e.preventDefault();
    let admissionDataCopy = { ...this.state.admissionData };
    let section = this.state.sections.find(
      (section, index) => section.name === admissionDataCopy.section
    );

    let createdStudent = await createStudentWithFees({
      ...admissionDataCopy,
      sectionId: section.dataValues.id,
    });

    // get the last id in the db
    let lastID = await getStudentLastId();
    admissionDataCopy.nextStudentID = lastID + 1;
    this.setState({
      admissionData: admissionDataCopy,
    });
  }

  render() {
    return (
      <Admission
        classOptions={classOptions}
        sectionOptions={this.state.sectionOptions}
        admissionData={this.state.admissionData}
        inputHandler={(e, d) => this.inputHandler(e, d, 'admissionData')}
        classInputHandler={(e, d) =>
          this.classInputHandler(e, d, 'admissionData')
        }
        sectionInputHandler={(e, d) =>
          this.sectionInputHandler(e, d, 'admissionData')
        }
        onSubmit={(e) => this.onSubmit(e)}
      />
    );
  }
}

export default AdmissionPage;
