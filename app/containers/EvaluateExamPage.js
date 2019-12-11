import React, { Component } from 'react';
import EvaluateExam from '../components/Exams/EvaluateExam/EvaluateExam';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Exam, StudentExam } from '../utils/database/index';
import { Op } from 'sequelize';

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
      score: 0
    },
    exams: [],
    examOptions: []
  };

  inputHandler = genericInputHandler;

  async dateInputHandler(e, { name, value }, stateKey) {
    // Setting up a date-time range from the beginning of
    // the day to its end to use in exam fetching by date
    let startDate = new Date(value);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate = new Date(startDate.getTime() - 1000);
    let endDate = new Date(value);
    endDate.setHours(23);
    endDate.setMinutes(59);

    // fetch exams with the date range (chosen day)
    let foundExams = await Exam.findAll({
      where: {
        date: {
          [Op.between]: [startDate, endDate]
        }
      }
    });

    // create exam options

    let examOptions = foundExams.map((exam, index) => {
      return {
        text: exam.dataValues.name,
        value: exam.dataValues.id,
        key: index
        // other???
      };
    });

    // saving stuff to state
    // put the found exams in state, just in case you need them???
    // put exam options in state
    let stateCopy = {
      ...this.state,
      evaluationFormData: { ...this.state.evaluationFormData }
    };
    stateCopy.examOptions = examOptions;
    stateCopy.exams = foundExams;
    stateCopy.evaluationFormData.date = value;
    await this.setState(stateCopy);
  }

  async submitHandler(e) {
    e.preventDefault();
    let formData = this.state.evaluationFormData;
    let exam = this.state.exams.find(
      exam => (exam.dataValues.id = formData.exam)
    );
    let createdData = await StudentExam.create({
      studentId: formData.id,
      examId: formData.exam,
      score: formData.score,
      passing: formData.score >= exam.dataValues.minimum
    });

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
          submitHandler={e => this.submitHandler(e)}
          examOptions={this.state.examOptions}
        />
      </div>
    );
  }
}

export default EvaluateExamPage;
