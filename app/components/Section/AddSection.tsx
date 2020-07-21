import React from 'react';
import {
  Button,
  Dropdown,
  Form,
  Input
} from 'formik-semantic-ui';

const AddSection = (props) => (
  <Form onSubmit={props.onSubmit} initialValues={{
    class: "",
    sectionName:"",
    monthlyFees:"",
    admissionFees:""
  }}>
    <Form.Group unstackable widths={2}>
      <Dropdown
        label="Class"
        name="class"
        inputProps={{
          required: true,
          placeholder: '1st',
          fluid: true,
        }}
        options={props.classes}
      />
      <Input
        label="Section Name"
        name="sectionName"
        inputProps={{
          required: true,
          placeholder: 'A-1',
        }}
      />
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Input
        label="Monthly Fees"
        name="monthlyFees"
        inputProps={{
          placeholder: 'EGP',
          required: true,
        }}
      />
      <Input
        label="Admission Fees"
        name="admissionFees"
        inputProps={{
          placeholder: 'EGP',
          required: true,
        }}
      />
    </Form.Group>
    <Button.Submit>Submit</Button.Submit>
  </Form>
);

export default AddSection;
