import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddPaymentGroup = props => (
  <Form onSubmit={props.onSubmit}>
    <Form.Group unstackable widths={2}>
      <Form.Input
        value={props.paymentGroupData.paymentName}
        onChange={props.inputHandler}
        name="paymentName"
        label="Payment Name"
        placeholder="Name"
        required
      />
      <Form.Input
        value={props.paymentGroupData.paymentValue}
        onChange={props.inputHandler}
        name="paymentValue"
        label="Payment Value"
        placeholder="Value"
        required
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
);

export default AddPaymentGroup;
