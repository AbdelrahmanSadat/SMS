import React from 'react';
import {
  Button,
  Form,
  Input,
} from 'formik-semantic-ui';

const AddPaymentGroup = props => (
  <Form onSubmit={props.onSubmit} initialValues={{
    paymentName: "",
    paymentValue: ''
  }}>
    <Form.Group unstackable widths={2}>
      <Input
        name="paymentName"
        label="Payment Name"
        inputProps={{
          placeholder: "Name",
          required: true
        }}
      />
      <Input
        name="paymentValue"
        label="Payment Value"
        inputProps={{
          placeholder: "Value",
          required: true
        }}
      />
    </Form.Group>
    <Button.Submit>Submit</Button.Submit>
  </Form>
);

export default AddPaymentGroup;
