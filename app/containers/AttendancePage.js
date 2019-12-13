import React, { Component } from 'react';
import {
  Section,
  Student,
  Attendance as AttendanceModel,
  StudentWarning,
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
      id: '',
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

  async startSessionHandler(e) {
    // e.preventDefault();
    let openSection = this.state.sections.find(
      section => section.id === this.state.formData.section
    );
    await this.setState({
      openSection: openSection,
      sessionOn: true
    });
    console.log(this.state);
    // increment section counter
    openSection.counter += this.state.formData.increment;
    openSection.save()
    // TODO: handler counter reaching max, auto add fees
    //? could be handled from DB models
    // TODO: find all students assigned to section
    let assignedStudents = await Student.findAll({
      where: {
        sectionId: openSection.id
      }
    });
    console.log(assignedStudents);
    let attendanceBulkCreateArray = assignedStudents.map((student, index) => {
      return {
        studentId: student.id,
        sectionId: openSection.id,
        date: this.state.formData.date
      };
    });
    let createdAttendances = await AttendanceModel.bulkCreate(
      attendanceBulkCreateArray
    );
  }

  endSessionHandler(e) {
    this.setState({
      sessionOn: false,
      openSection: {}
    });
  }

  async idSubmitHandler(e) {
    e.preventDefault();
    // TODO?: can keep all the created attendance records (in state?) and
    // ? update them as needed whenever a student attends
    // ? instead of fetching a student and searching attendance every time
    // take the id, find a student who has it
    let foundStudent = await Student.findOne({
      where: { id: this.state.formData.id },
      include: [Warning]
    });
    console.log(foundStudent)
    // check if the open section is the same as that student's assigned section
    if (foundStudent.sectionId != this.state.openSection.id) {
      // TODO: warning
      console.log('WRONG SECTION!');
    }
    // check if there are any warnings on the student
    if (foundStudent.warnings.length > 0) {
      console.log("WARNINGS")
      // TODO: warnings
      // if any exist, display the warnings in text for now
      console.log(foundStudent.warnings)
    }
    // change to attended
    let attendanceRecord = await AttendanceModel.findOne({
      where: {
        studentId: foundStudent.id,
        sectionId: this.state.openSection.id,
        date: this.state.formData.date
      }
    })
    attendanceRecord.attended = true;
    attendanceRecord.save().then(()=>console.log("updated record"))
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
