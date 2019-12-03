import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddFees = props => (
  <Form>
    <Form.Group unstackable widths={2}>
      <Form.Select
        required
        fluid
        label='Type'
        // options={props.classes}
        //this select menu should hold options of student/class/section/session each prompting a specific ID/Name/Date
        //through the adjacent Input Field
        placeholder='Student'
        />
        <Form.Input label='ID' placeholder='1' required />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default AddFees
