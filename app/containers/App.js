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
