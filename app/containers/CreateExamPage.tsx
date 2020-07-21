// * Creates an exam

// * TODO: create all the studentExam records while creating the exam
// * TODO: setting the default mark to zero, in order to handle
// * TODO: the students whose exams weren't even marked

import React, { Component } from 'react';
import CreateExam from '../components/Exams/CreateExam/CreateExam';
import { createExam } from '../utils/api/db/createExamPage';

class CreateExamPage extends Component {
  async onSubmit(values, formikApi) {
    let createdExam = await createExam(values);
    console.log(createdExam);
  }

  render() {
    return (
      <CreateExam
        onSubmit={(values, formikApi) => this.onSubmit(values, formikApi)}
      />
    );
  }
}

export default CreateExamPage;
