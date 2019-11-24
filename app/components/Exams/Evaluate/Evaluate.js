import React from 'react'

const Evaluate = (props)=>(
  <div>
    <input type = "text" placeholder = "ID"/>
    <br/>
    <br/>
    <select>
      <option>Exam</option>
    </select>
    <br/>
    <br/>
    <input type = "text" placeholder = "Student Marks"/>
    <br/>
    <br/>
    <button>Submit</button>
    <ul style = {{listStyleType:"none"}}>
      <li>Find an optimal way to quickly navigate/select exams for grade evaluation</li>
      <li>Check if the student passed the minimum passing grade</li>
    </ul>
  </div>
)

export default Evaluate
