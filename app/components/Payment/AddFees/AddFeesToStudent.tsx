import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddFeesToStudent = props => (
  <Form onSubmit={props.onSubmit}>
    <Form.Group unstackable widths={4}>
      <Form.Input
        name="studentId"
        label="ID"
        placeholder="1"
        required
        value={props.formData.studentId}
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
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
);

export default AddFeesToStudent;
