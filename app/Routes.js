import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';

//* The boilerplate uses a container for each component?
//* and imports that container which in turn renders
//* component

import App from './containers/App';
import AdmissionPage from './containers/AdmissionPage';
import AttendancePage from './containers/AttendancePage';
import WarningPage from './containers/WarningPage';
import ProfilePage from './containers/ProfilePage';
import AddFeesPage from './containers/AddFeesPage';
import AddPaymentGroupPage from './containers/AddPaymentGroupPage';
import ConfirmPaymentModalPage from './containers/ConfirmPaymentModalPage';
import PaymentPage from './containers/PaymentPage';
import AddSectionPage from './containers/AddSectionPage';
import StartSessionPage from './containers/StartSessionPage';
import CreateExamPage from './containers/CreateExamPage';
import EvaluateExamPage from './containers/EvaluateExamPage';
import DateLayerPage from './containers/DateLayerPage';


// TODO: define the rest of the routes
// TODO: define the route paths in constants dir.

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={AdmissionPage} />
      <Route path={routes.HOME} component={AddSectionPage} />
    </Switch>
  </App>
);
