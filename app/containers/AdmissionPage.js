// TODO: refactro this 140+-line container

import React, { Component } from 'react';
import Admission from '../components/Admission/Admission';
import {
  Student,
  Section,
  StudentFees,
  sequelize
} from '../utils/database/index';
import genericInputHandler from '../utils/misc/genericInputHandler';
import getLastId from '../utils/misc/getLastID';
import classOptions from '../constants/classOptions.json';

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
      address:'',
      parentName: '',
      parentOccupation: '',
      parentPhoneNumber: '',
      class: '',
      section: '',
      payment: '',
      notes: ''
    },
    sections: [],
    sectionOptions: []
  };

  inputHandler = genericInputHandler;

  async classInputHandler(e, { name, value }, stateKey) {
    let foundSections = await Section.findAll({
      where: {
        class: value
      }
    });

    // mapping the section model returned from the database
    // into a useful prop for select display
    let sectionOptions = [];
    if (foundSections.length > 0) {
      sectionOptions = foundSections.map((section, index) => ({
        // ???stateKey???
        stateKey: section.id,
        value: section.name,
        text: section.name
      }));
    }

    this.setState({
      sections: foundSections,
      sectionOptions
    });

    this.inputHandler(e, { name, value }, stateKey);
  }

  async sectionInputHandler(e, { name, value }, stateKey) {
    let section = this.state.sections.find(
      (section, index) => section.name === value
    );
    let { defaultAdmissionFees, defaultMonthlyFees, counter } = section;
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

  // executes only for the initial render
  async componentDidMount() {
    // get the last id in the db
    let lastID = await getLastId(sequelize, 'students');
    let admissionDataCopy = { ...this.state.admissionData };
    admissionDataCopy.nextStudentID = lastID + 1;
    this.setState({ admissionData: admissionDataCopy });
  }

  async onSubmit(e) {
    e.preventDefault();
    let admissionDataCopy = { ...this.state.admissionData };
    let section = this.state.sections.find(
      (section, index) => section.name === admissionDataCopy.section
    );

    let createdStudent = await Student.create({
      ...admissionDataCopy,
      sectionId: section.dataValues.id
    });

    // TODO?: should fees be paid on admission???
    // TODO?: and if so, is it both monthly and admissions fees?
    // TODO?: if paid immediatly, add to income
    let createdStudentFees = await StudentFees.create({
      studentId: createdStudent.dataValues.id,
      value: this.state.admissionData.payment
    });

    // get the last id in the db
    let lastID = await getLastId(sequelize, 'students');
    admissionDataCopy.nextStudentID = lastID + 1;
    this.setState({
      admissionData: admissionDataCopy
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
        onSubmit={e => this.onSubmit(e)}
      />
    );
  }
}

export default AdmissionPage;
