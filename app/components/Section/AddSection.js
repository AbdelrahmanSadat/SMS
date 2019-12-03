import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddSection = props => (
  <Form onSubmit={props.onSubmit}>
    <Form.Group unstackable widths={2}>
      <Form.Select
        required
        fluid
        label="Class"
        options={props.classes}
        placeholder="Class"
        onChange={props.classInputHandler}
      />
      <Form.Input
        label="Section Name"
        placeholder="A-1"
        required
        onChange={props.nameInputHandler}
      />
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Form.Input
        label="Monthly Fees"
        placeholder="EGP"
        required
        name="monthlyFees"
        onChange={props.monthlyFeesInputHandler}
      />
      <Form.Input
        label="Admission Fees"
        placeholder="EGP"
        required
        name="admissionFees"
        onChange={props.admissionFeesInputHandler}
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
);

export default AddSection;
