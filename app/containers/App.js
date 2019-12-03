// import React from 'react';
// import AdmissionPage from './AdmissionPage';
// import AttendancePage from './AttendancePage';
// import WarningPage from './WarningPage';
// import ProfilePage from './ProfilePage';
// import AddFeesPage from './AddFeesPage';
// import AddPaymentGroupPage from './AddPaymentGroupPage';
// import ConfirmPaymentModalPage from './ConfirmPaymentModalPage';
// import PaymentPage from './PaymentPage';
// import AddSectionPage from './AddSectionPage';
// import StartSessionPage from './StartSessionPage';
// import CreateExamPage from './CreateExamPage';
// import EvaluateExamPage from './EvaluateExamPage';
// import DateLayerPage from './DateLayerPage';

// class App extends React.Component<Props> {

//   state = {
//     classes: ['1st', '2nd', '3rd', 'other']
//   };

//   render() {
//     return <DateLayerPage/>;
//   }

// }

// export default App;

// @flow
import * as React from 'react';
// import models from '../utils/database/index';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}
