import React from 'react'
import { Button, Form } from 'semantic-ui-react';

const EvaluateExam = (props)=>(

    <Form>
      <Form.Group unstackable widths={2}>
        <Form.Input label='ID' placeholder='1' required />
        <Form.Input label='Student Marks' placeholder='83' required />
      </Form.Group>
      <Button type='submit'>Submit</Button>
      <ul style = {{listStyleType:"none"}}>
        <li>This Page Should Only Be Accessed Through Exam Date Layer</li>
        <li>Take The Exam Date From the date layer's state</li>
        <li>Create a function to check if the student passed the minimum passing grade</li>
      </ul>
    </Form>
)

export default EvaluateExam
