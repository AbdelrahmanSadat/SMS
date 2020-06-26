import React from 'react'
import { Button, Form } from 'semantic-ui-react';

const EvaluateExam = (props)=>(

    <Form>
      <Form.Group unstackable widths={2}>
        <Form.Input type = "date" label='Exam Date'  />
      </Form.Group>
      <Button type='submit'>Evaluate</Button>
      <ul style = {{listStyleType:"none"}}>
        <li>Default Value Of The Date Should Be Taken From The Running Session</li>
      </ul>
    </Form>
)

export default EvaluateExam
