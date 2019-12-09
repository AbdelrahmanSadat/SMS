import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const CreateExam = props => (
  <Form onSubmit={props.submitHandler}>
    <Form.Group unstackable widths={2}>
      <Form.Input
        label="Maximum"
        placeholder="100"
        required
        name="maximum"
        type="number"
        value={props.examFormData.maximum}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="Minimum"
        placeholder="50"
        required
        name="minimum"
        type="number"
        value={props.examFormData.minimum}
        onChange={props.inputHandler}
      />
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Form.Input
        label="Exam Name"
        placeholder="Feb Exam"
        required
        name="name"
        value={props.examFormData.name}
        onChange={props.inputHandler}
      />
      <Form.Input
        type="date"
        label="Exam Date"
        required
        name="date"
        value={props.examFormData.date}
        onChange={props.inputHandler}
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
);

export default CreateExam;
