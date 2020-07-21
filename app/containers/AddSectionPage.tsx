// * Adds section

import React, { Component } from 'react';
import AddSection from '../components/Section/AddSection';
import { createSection } from '../utils/api/db/addSectionPage';
import classOptions from '../constants/classOptions.json';

class AddSectionPage extends Component {
  async onSubmit(values, formikApi) {
    // e.preventDefault();
    let createdSection = await createSection(values);
    console.log(createdSection);
  }

  render() {
    return (
      <AddSection
        classes={classOptions}
        onSubmit={(values, formikApi) => this.onSubmit(values, formikApi)}
      />
    );
  }
}

export default AddSectionPage;
