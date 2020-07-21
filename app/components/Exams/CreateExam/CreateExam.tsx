import React from 'react';
import { Button, Form, Input } from 'formik-semantic-ui';

const CreateExam = (props) => (
  <Form
    onSubmit={props.onSubmit}
    initialValues={{
      maximum: '',
      minimum: '',
      name: '',
      date: '',
    }}
  >
    <Form.Group unstackable widths={2}>
      <Input
        label="Maximum"
        name="maximum"
        inputProps={{
          placeholder: '100',
          required: true,
          type: 'number',
        }}
      />
      <Input
        label="Minimum"
        name="minimum"
        inputProps={{
          placeholder: '50',
          required: true,
          type: 'number',
        }}
      />
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Input
        label="Exam Name"
        name="name"
        inputProps={{
          placeholder: 'Feb Exam',
          required: true,
        }}
      />
      <Input
        label="Exam Date"
        name="date"
        inputProps={{
          type: 'date',
          required: true,
        }}
      />
    </Form.Group>
    <Button.Submit>Submit</Button.Submit>
  </Form>
);

export default CreateExam;
