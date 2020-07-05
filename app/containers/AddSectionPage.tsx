// * Adds section

import React, { Component } from 'react';
import AddSection from '../components/Section/AddSection';
import { createSection } from '../utils/api/db/addSectionPage';
import genericInputHandler from '../utils/misc/genericInputHandler';
import classOptions from '../constants/classOptions.json';

class AddSectionPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    sectionData: {
      class: '',
      sectionName: '',
      monthlyFees: '',
      admissionFees: '',
    },
    classOptions,
  };

  inputHandler = genericInputHandler;

  async onSubmit(e) {
    e.preventDefault();
    let createdSeciton = await createSection(
      this.state.sectionData.sectionName,
      this.state.sectionData.class,
      this.state.sectionData.admissionFees,
      this.state.sectionData.monthlyFees
    );
  }

  render() {
    return (
      <div>
        <AddSection
          classes={this.state.classOptions}
          sectionData={this.state.sectionData}
          onSubmit={(event) => this.onSubmit(event)}
          inputHandler={(e, d) => this.inputHandler(e, d, 'sectionData')}
        />
      </div>
    );
  }
}

export default AddSectionPage;
