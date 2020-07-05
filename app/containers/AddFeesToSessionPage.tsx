// * Adds fees to all students in a certain session, according to
// * the session's date and time. Can add fees to  only the students
// * who attended the session, or to all who should've attended
// * (Uses the attendance records to identify the sessions by date)
// * The fees can be chosen using a predefined payment group,
// * or using a hard value provided by the user

// TODO: add the option to add fees to a session while it's running

import React, { Component } from 'react';
import AddFeesToSession from '../components/Payment/AddFees/AddFeesToSession';
import genericInputHandler from '../utils/misc/genericInputHandler';
import {
  findAllPaymentGroups,
  addFeesToSession,
} from '../utils/api/db/addFeesToSessionPage';

class AddFeesToSessionPage extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  state = {
    formData: {
      sessionDateTime: '',
      paymentGroup: '',
      value: '',
      name: '',
      attendantsOnly: false,
      // payment group's id, not used currently
      id: null,
    },
    paymentGroups: [],
  };

  inputHandler = genericInputHandler;

  // * Fetches all the payment groups to display them as options
  // * to the user
  async componentDidMount() {
    let paymentGroups = await findAllPaymentGroups();
    this.setState({ paymentGroups });
  }

  // * Changes the appropriate state values when the user
  // * chooses a payment group
  async paymentGroupInputHandler(e, { name, value }) {
    let paymentGroup = this.state.paymentGroups.find(
      (paymentGroup, index) => paymentGroup.name === value
    );

    let stateFormDataCopy = { ...this.state.formData };
    stateFormDataCopy.id = paymentGroup.id;
    stateFormDataCopy.name = paymentGroup.name;
    stateFormDataCopy.value = paymentGroup.value;

    await this.setState({ formData: stateFormDataCopy });
    // this.inputHandler(e, { name, value }, 'formData');
  }

  async onSubmit(e) {
    e.preventDefault();
    await addFeesToSession({
      sessionDateTime: this.state.formData.sessionDateTime,
      attendantsOnly: this.state.formData.attendantsOnly,
      feeName: this.state.formData.name,
      feeValue: this.state.formData.value,
    });
  }

  render() {
    let paymentGroupOptions;
    if (this.state.paymentGroups.length > 0) {
      paymentGroupOptions = this.state.paymentGroups.map(
        (paymentGroup, index) => {
          return {
            key: index,
            text: paymentGroup.name,
            value: paymentGroup.name,
          };
        }
      );
    }
    return (
      <div>
        <AddFeesToSession
          formData={this.state.formData}
          onSubmit={(e) => this.onSubmit(e)}
          paymentGroupOptions={paymentGroupOptions}
          inputHandler={(e, d) => this.inputHandler(e, d, 'formData')}
          paymentGroupInputHandler={(e, d) =>
            this.paymentGroupInputHandler(e, d, 'formData')
          }
        />
      </div>
    );
  }
}

export default AddFeesToSessionPage;
