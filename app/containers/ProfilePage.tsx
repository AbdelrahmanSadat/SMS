// * Displays a students info and allows editing of that information.
// * Finds the student using their id.

import React, { Component } from 'react';
import { cloneDeep, merge } from 'lodash';
import Profile from '../components/Profile/Profile';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Student, Section } from '../utils/database/index';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    studentSearchFormData: {
      id: ''
    },
    // * contains the student data, which can be edited
    studentEditFormData: {
      id: '',
      name: '',
      email: '',
      phoneNumber: '',
      parentName: '',
      parentPhoneNumber: '',
      parentOccupation: '',
      address: '',
      notes: '',
      school: '',
      class: '',
      status: '',
      attendanceCounter: '', // ? not sure how this can be used here
      sectionName: '',
      section: {},
      warnings: [],
      attendance: [], // ? not sure to display this here or not
      // * controlled by a checkbox, enables/disables editing
      // * the currently fetched student
      allowEditing: false
    },
    student: {}
  };

  inputHandler = genericInputHandler;

  // * Finds a student to display their data and allow its editing
  async studentSearchOnSubmit(e) {
    e.preventDefault();

    let foundStudent = await Student.findOne({
      where: { id: this.state.studentSearchFormData.id },
      include: [{ model: Section }]
    });

    this.setState({
      student: foundStudent
    });

    this.setState({
      studentEditFormData: {
        ...foundStudent.dataValues,
        sectionName: foundStudent.section.name
      }
    });

    console.log(foundStudent.dataValues);
  }

  // * Submits the newly edited student data
  async studentEditOnSubmit(e) {
    e.preventDefault();

    let studentCopy = cloneDeep(this.state.student);

    if (
      studentCopy.section.name != this.state.studentEditFormData.sectionName
    ) {
      let newSection = await Section.findOne({
        where: {
          name: this.state.studentEditFormData.sectionName
        }
      });
      // ? double negative?
      // ? should check if a section with that name was found
      if (!!newSection) studentCopy.sectionId = newSection.id;
      // otherwise, display that now section with that name exists
    }

    // merges the new values with the student model
    merge(studentCopy, studentCopy, this.state.studentEditFormData);
    console.log(studentCopy);
    let savedStudent = await studentCopy.save();

    this.setState({ student: savedStudent });
  }

  render() {
    return (
      <div>
        <Profile
          studentSearchFormData={this.state.studentSearchFormData}
          studentSearchInputHandler={(e, d) =>
            this.inputHandler(e, d, 'studentSearchFormData')
          }
          studentSearchOnSubmit={e => this.studentSearchOnSubmit(e)}
          studentEditFormData={this.state.studentEditFormData}
          studentEditInputHandler={(e, d) =>
            this.inputHandler(e, d, 'studentEditFormData')
          }
          studentEditOnSubmit={e => this.studentEditOnSubmit(e)}
        />
      </div>
    );
  }
}

export default ProfilePage;
