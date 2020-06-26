// ! Currently not being used

// * Renders one of the AddFees componenets according to 
// * user's selection

import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddFees = props => (
    <Form>
      <Form.Group unstackable widths={2}>
        <Form.Select
          required
          fluid
          name="type"
          label="Type"
          // options={props.classes}
          //this select menu should hold options of student/class/section/session each prompting a specific ID/Name/Date
          //through the adjacent Input Field
          options={props.addFeesTypeOptions}
          placeholder="Student"
          value={props.formData.type}
          onChange={props.inputHandler}
        />
        {
          // TODO: this renders conditionally according to
          // TODO: the value of the last input
        }
        {/* <Form.Input
        name="id"
        label="ID"
        placeholder="1"
        required
        value={props.formData.identifier}
        onChange={props.inputHandler}
      /> */}
      </Form.Group>
    <Button type="submit">Submit</Button>
    {props.identifierElement}
    </Form>
);

export default AddFees;
