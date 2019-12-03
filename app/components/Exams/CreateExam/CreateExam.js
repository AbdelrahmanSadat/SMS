import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const CreateExam = props => (
  <Form>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Maximum' placeholder='100' required />
      <Form.Input label='Minimum' placeholder='70' required />
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Exam Name' placeholder='Feb Exam' required />
      <Form.Input type = "date" label='Exam Date' required/>
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default CreateExam
