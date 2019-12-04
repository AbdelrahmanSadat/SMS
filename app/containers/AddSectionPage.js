import React, { Component } from 'react';
import AddSection from '../components/Section/AddSection';
import { Section } from '../utils/database';
import genericInputHandler from '../utils/misc/genericInputHandler'

class AddSectionPage extends Component {

  constructor(props) {
    super(props)
    this.inputHandler = this.inputHandler.bind(this)
  }

  state = {
    sectionData: {
      class: '',
      sectionName: '',
      monthlyFees: '',
      admissionFees: ''
    },
    // TODO: move to constants
    classOptions: [
      { key: '1', text: '1st', value: '1st' },
      { key: '2', text: '2nd', value: '2nd' },
      { key: '3', text: '3rd', value: '3rd' },
      { key: 'o', text: 'Other', value: 'other' }
    ]
  };

  inputHandler = genericInputHandler


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
          inputHandler={(e, d)=>this.inputHandler(e, d, "sectionData")}
        />
      </div>
    );
  }
}

export default AddSectionPage;
