// * Starts sessions and records attendance

// TODO: warnings

import React, { Component } from 'react';
import {
  Section,
  Student,
  Attendance as AttendanceModel,
  Warning
} from '../utils/database/index';
import Attendance from '../components/Attendance/Attendance';
import classOptions from '../constants/classOptions.json';
import genericInputHandler from '../utils/misc/genericInputHandler';

class AttendancePage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    formData: {
      // student id?
      id: '',
      // ? The section's id
      section: '',
      class: '',
      increment: 1,
      date: ''
    },
    classOptions,
    sections: [],
    sectionOptions: [],
    sessionOn: false,
    openSection: {}
  };

  inputHandler = genericInputHandler;

  // * handler for class dropdown change
  // * fetches sections with that class for the neighboring
  // * dropdown and creates options for them
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
        value: section.id,
        text: section.name
      }));
    }

    let stateCopy = { ...this.state, formData: { ...this.state.formData } };
    stateCopy.formData.class = value;

    this.setState({
      ...stateCopy,
      sections: foundSections,
      sectionOptions
    });
  }

  // * Handler for start session button
  // * Changes state to reflect ongoing session
  // * modifies the section, and creates attendance records
  async startSessionHandler(e) {
    // e.preventDefault();
    let openSection = this.state.sections.find(
      section => section.id == this.state.formData.section
    );
    await this.setState({
      openSection: openSection,
      sessionOn: true
    });
    // increment section counter
    openSection.counter += this.state.formData.increment;
    openSection.save();
    // TODO: handler counter reaching max, auto add fees
    //? could be handled from DB models
    // TODO: find all students assigned to section
    let assignedStudents = await Student.findAll({
      where: {
        sectionId: openSection.id
      }
    });
    // TODO: bug: no assigned students are found 
    // (because the student's section reference is null?)
    let attendanceBulkCreateArray = assignedStudents.map((student, index) => {
      return {
        studentId: student.id,
        // TODO: bug?: sectionID is null
        sectionId: openSection.id,
        date: this.state.formData.date
      };
    });
    let createdAttendances = await AttendanceModel.bulkCreate(
      attendanceBulkCreateArray
    );
  }

  //* Closes the open session
  endSessionHandler(e) {
    this.setState({
      sessionOn: false,
      openSection: {}
    });
  }

  // * handler for id form submitting
  // * finds student with id (currently using id not barcode id)
  // * checks if it's their assigned section
  // * checks for warnings
  // * takes student's attendance
  // *TODO: use barcode ID
  async idSubmitHandler(e) {
    e.preventDefault();
    // TODO?: can keep all the created attendance records (in state?) and
    // ? update them as needed whenever a student attends
    // ? instead of fetching a student and searching attendance every time
    // take the id, find a student who has it
    let foundStudent = await Student.findOne({
      where: {
        id: this.state.formData.id
      },
      include: [Warning]
    });
    // check if the open section is the same as that student's assigned section
    if (foundStudent.sectionId != this.state.openSection.id) {
      // TODO: warning
      console.log('WRONG SECTION!');
    }
    // check if there are any warnings on the student
    if (foundStudent.warnings.length > 0) {
      console.log('WARNINGS');
      // TODO: warnings
      // if any exist, display the warnings in text for now
      console.log(foundStudent.warnings);
    }
    // change to attended
    let attendanceRecord = await AttendanceModel.findOne({
      where: {
        studentId: foundStudent.id,
        sectionId: this.state.openSection.id,
        date: this.state.formData.date
      }
    });
    attendanceRecord.attended = true;
    attendanceRecord.save().then(() => console.log('updated record'));
    // clear id field for next student
    this.setState({
      formData: { id: '' }
    });
  }

  render() {
    return (
      <div>
        <Attendance
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          classInputHandler={(e, d) => this.classInputHandler(e, d, 'formData')}
          startSessionHandler={e => this.startSessionHandler(e)}
          endSessionHandler={e => this.endSessionHandler(e)}
          idSubmitHandler={e => this.idSubmitHandler(e)}
          formData={this.state.formData}
          classOptions={this.state.classOptions}
          sectionOptions={this.state.sectionOptions}
          sessionOn={this.state.sessionOn}
        />
      </div>
    );
  }
}

export default AttendancePage;
