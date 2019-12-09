import React, { Component } from 'react';
import CreateExam from '../components/Exams/CreateExam/CreateExam';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Exam } from '../utils/database/';

class CreateExamPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    examFormData: {
      name: '',
      maximum: 100,
      minimum: 50,
      date: ''
    }
  };

  inputHandler = genericInputHandler;

  async submitHandler(e) {
    e.preventDefault();
    let createdExam = await Exam.create({ ...this.state.examFormData });
  }

  render() {
    return (
      <div>
        <CreateExam
          inputHandler={(e, d) => this.inputHandler(e, d, 'examFormData')}
          submitHandler={e=>this.submitHandler(e)}
          examFormData={this.state.examFormData}
        />
      </div>
    );
  }
}

export default CreateExamPage;
