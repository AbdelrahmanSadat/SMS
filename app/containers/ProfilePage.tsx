// * Displays a students info and allows editing of that information.
// * Finds the student using their id.

import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import Profile from '../components/Profile/Profile';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { findStudent, updateStudent } from '../utils/api/db/profilePage';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    studentSearchFormData: {
      id: '',
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
      allowEditing: false,
    },
    student: {},
  };

  inputHandler = genericInputHandler;

  // * Finds a student to display their data and allow its editing
  async studentSearchOnSubmit(e) {
    e.preventDefault();

    // the "+" converts id string into a number
    let foundStudent = await findStudent(+this.state.studentSearchFormData.id);

    this.setState({
      student: foundStudent,
      studentEditFormData: {
        ...foundStudent.dataValues,
        sectionName: foundStudent.section.name,
      },
    });
  }

  // * Submits the newly edited student data
  async studentEditOnSubmit(e) {
    e.preventDefault();
    let studentCopy = cloneDeep(this.state.student);
    let savedStudent = await updateStudent(
      studentCopy,
      this.state.studentEditFormData
    );

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
          studentSearchOnSubmit={(e) => this.studentSearchOnSubmit(e)}
          studentEditFormData={this.state.studentEditFormData}
          studentEditInputHandler={(e, d) =>
            this.inputHandler(e, d, 'studentEditFormData')
          }
          studentEditOnSubmit={(e) => this.studentEditOnSubmit(e)}
        />
      </div>
    );
  }
}

export default ProfilePage;
