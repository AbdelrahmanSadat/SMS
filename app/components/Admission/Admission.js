import React from 'react'
import { Button, Form } from 'semantic-ui-react'

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]

const Admission = () => (
  <Form>
    <Form.Group unstackable widths={2}>
      <Form.Input label='ID' placeholder='Increment last ID in DB' disabled />
      <Form.Input label='Name' placeholder='Name' required />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Phone Number' placeholder='Phone Number' required />
      <Form.Input label='School' placeholder='School' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Parent Occupation' placeholder='Parent Occupation' />
      <Form.Input label='Parent Phone Number' placeholder='Parent Phone Number' />
    </Form.Group>
    <Form.Group widths={2}>
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
        // options={props.classes.sections}
        placeholder='Section'
        />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Payment' value='Default Section Payment' required />
      <Form.TextArea label='Notes' placeholder='Notes' />
    </Form.Group>
    <Button type='submit'>Submit</Button>
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
)

export default Admission
