import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddFeesToSession = props => (
  <Form onSubmit={props.onSubmit}>
    <Form.Group unstackable widths={4}>
      <Form.Input
        name="sessionDateTime"
        label="Session Date-Time"
        required
        type="datetime-local"
        value={props.formData.sessionDateTime}
        onChange={props.inputHandler}
      />
      <Form.Select
        name="paymentGroup"
        label="Payment Group"
        placeholder="Payment Group"
        required
        options={props.paymentGroupOptions}
        onChange={props.paymentGroupInputHandler}
      />
      <Form.Input
        name="value"
        label="Value"
        placeholder="EGP"
        required
        value={props.formData.value}
        onChange={props.inputHandler}
      />
      <Form.Input
        name="name"
        label="Payment Name/Note"
        placeholder="Note"
        required
        value={props.formData.name}
        onChange={props.inputHandler}
      />
      <Form.Checkbox
        name="attendantsOnly"
        label="Add Fees To Attended Students Only"
        checked={props.formData.attendantsOnly}
        onChange={props.inputHandler}
      ></Form.Checkbox>
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
);

export default AddFeesToSession;
