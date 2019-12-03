import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const StartSession = props => (
  <Form>
    <Form.Group unstackable widths={2}>
      <Form.Select
        required
        fluid
        label='Class'
        // options={props.classes}
        placeholder='Class'
        />
        <Form.Select
          required
          fluid
          label='Section'
          // options={props.classes}
          placeholder='Section'
          />
    </Form.Group>
    <Form.Group unstackable widths={1}>
      <Form.Input label='Incrementation Value' value = '1' required />
    </Form.Group>

    <Button type='submit'>Start Session</Button>
  </Form>
)
export default StartSession
