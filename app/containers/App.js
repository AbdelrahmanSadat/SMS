// @flow
import * as React from 'react';
import models from '../utils/database/index'

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    console.log("Found Users:")
    models.User.findOrCreate({where:{username:"user one", age:"20"}}).then((foundUsers)=>console.log(foundUsers))
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
