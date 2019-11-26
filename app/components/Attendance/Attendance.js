import React from 'react'
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

const Attendance = props => (
  <div>
    <input type="text" placeholder="ID" />
    <br />
    <br />
    <button>Submit</button>
    <br />
    <br />
    <input type="text" placeholder="Fetch Name From DB" />
    <br />
    <br />
    <input type="text" placeholder="Fetch Notes From DB" />
    <ul style={{ listStyleType: 'none' }}>
      <li>Automate the attendance process (Focus, Submit, Clear)</li>
      <li>
        Set Section in State & validate student's existance in the section
      </li>
      <li>Handle warnings with a modal (Skip, Deny)</li>
    </ul>
    <Link to={routes.COUNTER}>to Counter</Link>
  </div>
)

export default Attendance
