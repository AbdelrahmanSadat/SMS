import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const Attendance = props => (
  <div>
    <Form>
      {
        // TODO: filtering sections by a class input
        // TODO: required fields not working on first form
      }
      <Form.Select
        label="Class"
        name="class"
        placeholder="1st"
        required
        name="section"
        options={props.classOptions}
        value={props.formData.class}
        onChange={props.classInputHandler}
        disabled={props.sessionOn}
      />
      <Form.Select
        label="Section"
        name="section"
        placeholder="1"
        required
        name="section"
        options={props.sectionOptions}
        value={props.formData.section}
        onChange={props.inputHandler}
        disabled={props.sessionOn}
      />
      <Form.Input
        label="Increment"
        placeholder="1"
        required
        name="increment"
        type="number"
        value={props.formData.increment}
        onChange={props.inputHandler}
        disabled={props.sessionOn}
      />
      {// TODO: date time validation and maximum value (for db)
      }
      <Form.Input
        label="Start Time"
        type="datetime-local"
        required
        name="date"
        value={props.formData.date}
        onChange={props.inputHandler}
        disabled={props.sessionOn}
      />
      {
        // TODO: alternate buttons according to state
      }
      <Button type="submit" onClick={props.startSessionHandler}>
        Start Session
      </Button>
      <Button onClick={props.endSessionHandler}>End Session</Button>
    </Form>
    <Form onSubmit={props.idSubmitHandler}>
      <Form.Input
        label="ID"
        placeholder="1"
        required
        name="id"
        value={props.formData.id}
        onChange={props.inputHandler}
      />
      <Button type="submit">Find</Button>
    </Form>
    <p>Fetch Name From DB</p>
    <p>Fetch Notes From DB</p>
    <ul style={{ listStyleType: 'none' }}>
      <li>Starting a session</li>
      <li>Automate the attendance process (Focus, Submit, Clear)</li>
      <li>
        Set Section in State & validate student's existance in the section
      </li>
      <li>Integrate with the warningsModal</li>
    </ul>
  </div>
);

export default Attendance;
