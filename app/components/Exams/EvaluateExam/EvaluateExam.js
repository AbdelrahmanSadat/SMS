import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const EvaluateExam = props => (
  <Form onSubmit={props.submitHandler}>
    <Form.Group unstackable widths={2}>
      <Form.Input
        label="Exam Creation Date"
        type="date"
        required
        name="date"
        value={props.evaluationFormData.examDate}
        onChange={props.dateInputHandler}
      />

      {/* TODO: exam dropdown */}
      <Form.Select
        label="Exam"
        required
        name="exam"
        options={props.examOptions}
        value={props.evaluationFormData.exam}
        onChange={props.inputHandler}
      />

      {/* <Form.Input
        label="Taken on"
        type="date"
        required
        name="takenOn"
        value={props.evaluationFormData.takenOn}
        onChange={props.inputHandler}
      /> */}

      <Form.Input
        label="ID"
        placeholder="1"
        required
        name="id"
        value={props.evaluationFormData.id}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="Score"
        placeholder="83"
        type="number"
        required
        name="score"
        value={props.evaluationFormData.score}
        onChange={props.inputHandler}
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
);

export default EvaluateExam;
