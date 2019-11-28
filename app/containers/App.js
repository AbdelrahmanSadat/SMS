// @flow
import * as React from 'react';
import models from '../utils/database/index';
import AdmissionPage from './AdmissionPage';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  state = {
    classes: ['1st', '2nd', '3rd', 'other']
  };

  render() {
    return <AdmissionPage classes={this.state.classes} />;
  }
}
