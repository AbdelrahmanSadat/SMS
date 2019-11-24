import React from 'react';



const Payment = (props)=>(
  <div>
  <input type = "text" placeholder = "ID"></input>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Class</th>
        <th>Section</th>
        <th>Due Payment</th>
        <th>Pay Button</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <th>Default ID</th>
      <th>Default Name</th>
      <th>Default Class</th>
      <th>Default Section</th>
      <th>Default Payment</th>
      <th>Pay</th>
      </tr>
    </tbody>
  </table>
    <ul style = {{listStyleType:"none"}}>
      <li>Fetch Student Data Using ID & Rerender</li>
      <li>onClicking Pay Prompt Confirmation through a modal</li>
      <li>onConfirmation, Mark The Paid Fees in the student payment record</li>
      <li>reFetch Due Fees from student & reRener</li>
      <li>Add payment to the income records</li>
    </ul>
  </div>
)








export default Payment;
