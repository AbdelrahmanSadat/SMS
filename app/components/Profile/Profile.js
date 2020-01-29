import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const Profile = props => (
  <div>
    {/* The first form is for searching for a student */}
    <Form onSubmit={props.studentSearchOnSubmit}>
      <Form.Input
        label="ID"
        placeholder="1"
        required
        name="id"
        value={props.studentSearchFormData.id}
        onChange={props.studentSearchInputHandler}
      />
      <Button type="submit">Find</Button>
    </Form>

    {/* The second form is to edit the student data */}
    <Form onSubmit={props.studentEditOnSubmit}>
      {/* // TODO: the inputs can be refactored to be generated instead
          of hard-coded */}
      <Form.Checkbox
        name="allowEditing"
        label="Enable Editing"
        checked={props.studentEditFormData.allowEditing}
        onChange={props.studentEditInputHandler}
      />
      <Form.Input
        name="address"
        label="Address"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.address}
      />
      <Form.Input
        name="class"
        label="Class"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.class}
      />
      <Form.Input
        name="email"
        label="Email"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.email}
      />
      <Form.Input
        name="id"
        label="ID"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.id}
      />
      <Form.Input
        name="name"
        label="Name"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.name}
      />
      <Form.Input
        name="notes"
        label="notes"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.notes}
      />
      <Form.Input
        name="parentName"
        label="Parent's Name"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.parentName}
      />
      <Form.Input
        name="parentOccupation"
        label="Parent's Occupation"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.parentOccupation}
      />
      <Form.Input
        name="parentPhoneNumber"
        label="Parent's Phone Number"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.parentPhoneNumber}
      />
      <Form.Input
        name="phoneNumber"
        label="Phone Number"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.phoneNumber}
      />
      {/* // TODO: properly implement reservation date editing */}
      {/* <Form.Input
        name="reservationDate"
        label="Reservation Date"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.reservationDate}
      /> */}
      <Form.Input
        name="School"
        label="School"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.school}
      />
      {/* // TODO: Allow section editing */}
      {/* <Form.Input name="section" onChange={props.studentEditInputHandler}
      disabled={!props.studentEditFormData.allowEditing}/> */}
      <Form.Input
        name="status"
        label="Status"
        onChange={props.studentEditInputHandler}
        disabled={!props.studentEditFormData.allowEditing}
        value={props.studentEditFormData.status}
      />
      <Button type="submit" disabled={!props.studentEditFormData.allowEditing}>
        Submit
      </Button>
    </Form>

    <ul style={{ listStyleType: 'none' }}>
      <li>Display Student Data</li>
      <li>
        Create a select input with the three status: Active, Wanted(Prompts
        Reason), Terminated(Prompts Reason)
      </li>
      <li>Everything is editable except for the ID & Date of registeration</li>
    </ul>
  </div>
);

export default Profile;
