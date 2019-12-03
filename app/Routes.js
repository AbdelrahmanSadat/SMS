import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
// import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';
//* The boilerplate uses a container for each component?
//* and imports that container which in turn renders
//* component
// import Admission from './components/Admission/Admission';
// TODO: import containers instead of components
import AdmissionPage from './containers/AdmissionPage';
import Attendance from './components/Attendance/Attendance';

// TODO: define the rest of the routes
// TODO: define the route paths in constants dir.

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={AdmissionPage} />
      <Route path={routes.HOME} component={Attendance} />
    </Switch>
  </App>
);
