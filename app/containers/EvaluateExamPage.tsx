// * Evaluates the exam
import React, { Component } from 'react';
import EvaluateExam from '../components/Exams/EvaluateExam/EvaluateExam';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { findExamsWithDate, createStudentExam } from '../utils/api/db/evaluateExamPage';

class EvaluateExamPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    evaluationFormData: {
      // student's id
      id: '',
      date: '',
      // holds exam id
      exam: '',
      // takenOn: '',
      score: 0,
    },
    exams: [],
    examOptions: [],
  };
  
  inputHandler = genericInputHandler;
  
  // * Changes the set of exams to display in the exam input options
  // * The user selects a date, and all exams that were created
  // * with that date are shown.
  async dateInputHandler(e, { name, value }, stateKey) {
    // fetch exams with the date range (chosen day)
    // TODO!: Bug with date. Returns exams form one day earlier
    // TODO!: (at least a +2 hr difference because of timezone)
    let foundExams = await findExamsWithDate(value)
    
    // create exam options
    
    let examOptions = foundExams.map((exam, index) => {
      return {
        text: exam.dataValues.name,
        value: exam.dataValues.id,
        key: index,
        // other???
      };
    });

    // saving stuff to state
    // put the found exams in state, just in case you need them???
    // put exam options in state
    let stateCopy = {
      ...this.state,
      evaluationFormData: { ...this.state.evaluationFormData },
    };
    stateCopy.examOptions = examOptions;
    stateCopy.exams = foundExams;
    stateCopy.evaluationFormData.date = value;
    await this.setState(stateCopy);
  }

  // * Creates a record for grading the student for the exam
  async submitHandler(e) {
    e.preventDefault();
    let formData = this.state.evaluationFormData;
    let exam = this.state.exams.find(
      (exam) => (exam.dataValues.id = formData.exam)
    );
    let createdData = await createStudentExam(formData, exam)
  }

  render() {
    return (
      <div>
        <EvaluateExam
          inputHandler={(e, d) => this.inputHandler(e, d, 'evaluationFormData')}
          dateInputHandler={(e, d) =>
            this.dateInputHandler(e, d, 'evaluationFormData')
          }
          evaluationFormData={this.state.evaluationFormData}
          submitHandler={(e) => this.submitHandler(e)}
          examOptions={this.state.examOptions}
        />
      </div>
    );
  }
}

export default EvaluateExamPage;
