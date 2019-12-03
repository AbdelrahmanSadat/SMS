import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const Attendance = props => (
  <div>
  <Form>
    <Form.Field inline>
      <label>ID</label>
      <Input/>
    </Form.Field>
  </Form>
    <p>Fetch Name From DB</p>
    <p>Fetch Notes From DB</p>
    <ul style={{ listStyleType: 'none' }}>
      <li>Automate the attendance process (Focus, Submit, Clear)</li>
      <li>
        Set Section in State & validate student's existance in the section
      </li>
      <li>Integrate with the warningsModal</li>
    </ul>
  </div>
)

export default Attendance
