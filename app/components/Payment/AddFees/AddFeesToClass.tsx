import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddFeesToClass = props => (
  <Form onSubmit={props.onSubmit}>
    <Form.Group unstackable widths={4}>
      <Form.Select
        name="class"
        label="Class"
        placeholder="1st"
        required
        value={props.formData.class}
        onChange={props.classInputHandler}
        options={props.classOptions}
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

export default AddFeesToClass;
