import React, { Component } from 'react';
import AddSection from '../components/Section/AddSection';
import { Section } from '../utils/database';

class AddSectionPage extends Component {
  state = {
    sectionData: {
      class: '',
      sectionName: '',
      monthlyFees: '',
      admissionFees: ''
    },
    classOptions: [
      { key: '1', text: '1st', value: '1st' },
      { key: '2', text: '2nd', value: '2nd' },
      { key: '3', text: '3rd', value: '3rd' },
      { key: 'o', text: 'other', value: 'other' }
    ]
  };

  inputHandler(event, input) {
    console.log('STATE');
    console.log(this.state);
    let sectionDataCopy = { ...this.state.sectionData };
    let temp = event.target.value;
    sectionDataCopy[input] = temp;
    this.setState({ sectionData: sectionDataCopy });
  }

  selectInputHandler(event, input) {
    console.log('EBENT');
    console.log(event.target.textContent);
    console.log('STATE');
    console.log(this.state);
    let sectionDataCopy = { ...this.state.sectionData };
    let temp = event.target.textContent;
    sectionDataCopy[input] = temp;
    this.setState({ sectionData: sectionDataCopy });
  }

  async onSubmit(e) {
    e.preventDefault();
    let createdSeciton = await Section.create({
      name: this.state.sectionData.sectionName,
      class: this.state.sectionData.class,
      defaultAdmissionFees: this.state.sectionData.admissionFees,
      defaultMonthlyFees: this.state.sectionData.monthlyFees
    });
    console.log(createdSeciton);
  }

  render() {
    return (
      <div>
        <AddSection
          classes={this.state.classOptions}
          onSubmit={event => this.onSubmit(event)}
          nameInputHandler={event => this.inputHandler(event, 'sectionName')}
          monthlyFeesInputHandler={event =>
            this.inputHandler(event, 'monthlyFees')
          }
          admissionFeesInputHandler={event =>
            this.inputHandler(event, 'admissionFees')
          }
          classInputHandler={event =>
            this.selectInputHandler(event, 'class')
          }
        />
      </div>
    );
  }
}

export default AddSectionPage;
