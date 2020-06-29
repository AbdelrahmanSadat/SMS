/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';

//* The boilerplate uses a container for each component?
//* and imports that container which in turn renders
//* component

import HomePage from './containers/HomePage';
import AdmissionPage from './containers/AdmissionPage';
import AttendancePage from './containers/AttendancePage';
// import WarningPage from './containers/WarningPage';
import ProfilePage from './containers/ProfilePage';
// import AddFeesPage from './containers/AddFeesPage';
import AddFeesToStudentPage from './containers/AddFeesToStudentPage';
import AddFeesToClassPage from './containers/AddFeesToClassPage';
import AddFeesToSectionPage from './containers/AddFeesToSectionPage';
import AddFeesToSessionPage from './containers/AddFeesToSessionPage';
import AddPaymentGroupPage from './containers/AddPaymentGroupPage';
// import ConfirmPaymentModalPage from './containers/ConfirmPaymentModalPage';
import PaymentPage from './containers/PaymentPage';
import AddSectionPage from './containers/AddSectionPage';
import StartSessionPage from './containers/StartSessionPage';
import CreateExamPage from './containers/CreateExamPage';
import EvaluateExamPage from './containers/EvaluateExamPage';
// import DateLayerPage from './containers/DateLayerPage';

// TODO: Remove this boilerplate code
// Lazily load routes and code split with webpacck
// const LazyCounterPage = React.lazy(() =>
//   import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
// );

// const CounterPage = (props: Record<string, any>) => (
//   <React.Suspense fallback={<h1>Loading...</h1>}>
//     <LazyCounterPage {...props} />
//   </React.Suspense>
// );

export default function Routes() {
  return (
    <App>
      <Switch>
        {/* <Route path={routes.HR} component={} /> */}
        {/* <Route path={routes.REPORTS} component={} /> */}
        {/* <Route path={routes.SEMESTER} component={} /> */}
        {/* <Route path={routes.EXPENSES} component={} /> */}
        {/* <Route path={routes.INCOME} component={} /> */}
        {/* <Route path={routes.LOGIN} component={} /> */}

        {/* <Route path={routes.HOME} component={HomePage} /> */}
        <Route path={routes.ADDFEESTOCLASS} component={AddFeesToClassPage} />
        <Route
          path={routes.ADDFEESTOSECTION}
          component={AddFeesToSectionPage}
        />
        <Route
          path={routes.ADDFEESTOSESSION}
          component={AddFeesToSessionPage}
        />
        <Route
          path={routes.ADDFEESTOSTUDENT}
          component={AddFeesToStudentPage}
        />

        <Route path={routes.ADMISSION} component={AdmissionPage} />
        <Route path={routes.ATTENDANCE} component={AttendancePage} />

        <Route path={routes.CREATEEXAM} component={CreateExamPage} />
        <Route path={routes.EVALUATEEXAM} component={EvaluateExamPage} />

        <Route path={routes.PAYMENT} component={PaymentPage} />
        <Route path={routes.ADDPAYMENTGROUP} component={AddPaymentGroupPage} />

        <Route path={routes.PROFILE} component={ProfilePage} />

        <Route path={routes.ADDSECTION} component={AddSectionPage} />

        <Route path={routes.STARTSESSION} component={StartSessionPage} />
        <Route exact path={routes.HOME} component={HomePage} />
        {/* <Route path={routes.CATCHALL} component={Layout} /> */}
      </Switch>
    </App>
  );
}
