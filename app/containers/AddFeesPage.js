// ! Currently not being used

// * Renders one of the AddFees componenets according to 
// * user's selection

import React, { Component } from 'react';
import addFeesTypeOptions from '../constants/addFeesTypeOptions.json';
import classOptions from '../constants/classOptions.json';
import AddFees from '../components/Payment/AddFees/AddFees';
import genericInputHandler from '../utils/misc/genericInputHandler';
import { Button, Form } from 'semantic-ui-react';


class AddFeesPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    formData: {
      type: '',
      identifier: ''
    },
    addFeesTypeOptions,
    classOptions,
    // sections fetched from the database?
    sections: []
  };

  inputHandler = genericInputHandler;

  render() {
    let identifierElement;
    switch (this.state.formData.type) {
      case 'section':
        <p>Section :|</p>
        // <Form.Select
        //   required
        //   fluid
        //   label="Type"
        //   options={
        //     this.state.classOptions //through the adjacent Input Field //this select menu should hold options of student/class/section/session each prompting a specific ID/Name/Date // options={props.classes}
        //   }
        //   placeholder="Class"
        //   value={props.formData.identifier}
        //   onChange={(e, d) => this.state.inputHandler(e, d, 'formData')}
        //   name="identifier"
        // />;
        break;
      case 'student':
        identifierElement = identifierElement = (
          <Form.Input
            required
            fluid
            label="ID"
            placeholder="ID"
            value={this.state.formData.identifier}
            onChange={(e, d) => this.inputHandler(e, d, 'formData')}
            name="identifier"
          />
        );
        break;
      case 'class':
        identifierElement = identifierElement = (
          <Form.Select
            required
            fluid
            label="Type"
            // through the adjacent Input Field 
            // this select menu should hold options 
            // bof student /class/section/session 
            // each prompting a specific ID / Name / Date 
            // options={props.classes}
            options={this.state.classOptions}
            placeholder="Class"
            value={this.state.formData.identifier}
            onChange={(e, d) => this.inputHandler(e, d, 'formData')}
            name="identifier"
          />
        );
        break;
      case 'session':
        identifierElement = <p style={{ color: 'black' }}>Session</p>;
        break;
      default:
    }

    return (
      <div>
        <AddFees
          formData={this.state.formData}
          addFeesTypeOptions={this.state.addFeesTypeOptions}
          identifierElement={identifierElement}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
        />
      </div>
    );
  }
}

export default AddFeesPage;
