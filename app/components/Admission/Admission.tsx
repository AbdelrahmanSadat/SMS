import React from 'react';
import { Button, Form } from 'semantic-ui-react';



const Admission = props => (
  <Form onSubmit={props.onSubmit}>
    <Form.Group unstackable widths={3}>
      <Form.Input
        label="ID"
        placeholder="Increment last ID in DB"
        disabled
        name="nextID"
        value={props.admissionData.nextStudentID}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="Name"
        placeholder="Name"
        required
        name="name"
        value={props.admissionData.name}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="Email"
        placeholder="Email"
        required
        name="email"
        value={props.admissionData.email}
        onChange={props.inputHandler}
      />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input
        label="Phone Number"
        placeholder="Phone Number"
        required
        name="phoneNumber"
        value={props.admissionData.phoneNumber}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="School"
        placeholder="School"
        name="school"
        value={props.admissionData.school}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="Address"
        placeholder="Address"
        name="address"
        value={props.admissionData.address}
        onChange={props.inputHandler}
      />
    </Form.Group>
    <Form.Group widths={3}>
      <Form.Input
        label="Parent Name"
        placeholder="Parent Name"
        name="parentName"
        value={props.admissionData.parentName}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="Parent Occupation"
        placeholder="Parent Occupation"
        name="parentOccupation"
        value={props.admissionData.parentOccupation}
        onChange={props.inputHandler}
      />
      <Form.Input
        label="Parent Phone Number"
        placeholder="Parent Phone Number"
        name="parentPhoneNumber"
        value={props.admissionData.parentPhoneNumber}
        onChange={props.inputHandler}
      />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Select
        required
        fluid
        label="Class"
        options={props.classOptions}
        placeholder="Class"
        name="class"
        value={props.admissionData.class}
        onChange={props.classInputHandler}
      />
      <Form.Select
        required
        fluid
        label="Section"
        options={props.sectionOptions}
        placeholder="Section"
        name="section"
        value={props.admissionData.section}
        onChange={props.sectionInputHandler}
      />
    </Form.Group>
    <Form.Group widths={2}>
      {/* TODO: name this? */}
      <Form.Input
        label="Payment"
        value="Default Section Payment"
        required
        name="payment"
        value={props.admissionData.payment}
        onChange={props.inputHandler}
      />
      <Form.TextArea
        label="Notes"
        placeholder="Notes"
        name="notes"
        value={props.admissionData.notes}
        onChange={props.inputHandler}
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
    <ul style={{ listStyleType: 'none' }}>
      <li>Handling ID incrementation</li>
      <li>
        Getting the Class state to affect the Section state and hence the
        default payment
      </li>
      <li>
        On Submit: Create Student, Add Fees based on class and section, Set
        Default Student Parameters
      </li>
    </ul>
  </Form>
);

export default Admission;
