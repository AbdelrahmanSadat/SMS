import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

const Admission = props => (
  <div>
    {console.log(props.classes)}
    <input type="text" placeholder="Increment last ID in DB" disabled />
    <br />
    <br />
    <input type="text" placeholder="Name" />
    <br />
    <br />
    <input type="text" placeholder="Phone Number" />
    <br />
    <br />
    <input type="text" placeholder="Parent Occupation" />
    <br />
    <br />
    <input type="text" placeholder="Parent Phone Number" />
    <br />
    <br />
    <select>
      <option>Class</option>
    </select>
    <br />
    <br />
    <select>
      <option>Section</option>
    </select>
    <br />
    <br />
    <input type="text" value="default section payment" />
    <br />
    <br />
    <input type="text" placeholder="School" />
    <br />
    <br />
    <input type="textarea" placeholder="Notes" />
    <br />
    <br />
    <input type="date" disabled />
    <br />
    <br />
    <button>Submit</button>
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
    <Link to={routes.HOME}>to Counter</Link>
  </div>
);

export default Admission;
