import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  // Dropdown,
  Icon,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import routes from '../constants/routes.json';

// TODO: Make the sidebar's height constant across pages
// TODO: Make it look nicer, remove unnecessary spacing at the top
// TODO: Figure out why there are random line separations in the menu

class Layout extends Component {
  state = {
    sidebarVisibility: false
  };
  setSidebarVisibility(visibility: Boolean) {
    this.setState({ sidebarVisibility: visibility });
  }
  render() {
    console.log("THIS IS THE ROUTE:");
    console.log(routes.PAYMENT);
    return (
      // <Sidebar.Pushable as={Segment}>
      <Sidebar.Pushable>
        <Menu borderless>
          <Menu.Item fitted>
            <Button
              icon
              onClick={_e => this.setSidebarVisibility(true)}
            >
              <Icon name="bars" />
            </Button>
          </Menu.Item>
        </Menu>
        <Sidebar
          as={Menu}
          // icon="labeled"
          animation="push"
          direction="left"
          inverted
          onHide={() => this.setSidebarVisibility(false)}
          vertical
          visible={this.state.sidebarVisibility}
          width="thin"
          compact
        >
          <Menu.Item name="home">
            <Link to={routes.HOME}>Home</Link>
          </Menu.Item>
          <Menu.Item name="payments">
            Payments
            <Menu.Menu>
              <Menu.Item name="payment">
                <Link to={routes.PAYMENT}>Payment</Link>
              </Menu.Item>
              <Menu.Item name="paymentGroup">
                <Link to={routes.ADDPAYMENTGROUP}>Create Payment Group</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="addFees">
            Add Fees
            <Menu.Menu>
              <Menu.Item name="addFeesToClass">
                <Link to={routes.ADDFEESTOCLASS}>Class</Link>
              </Menu.Item>
              <Menu.Item name="addFeesToStudent">
                <Link to={routes.ADDFEESTOSTUDENT}>Student</Link>
              </Menu.Item>
              <Menu.Item name="addFeesToSection">
                <Link to={routes.ADDFEESTOSECTION}>Section</Link>
              </Menu.Item>
              <Menu.Item name="addFeesToSession">
                <Link to={routes.ADDFEESTOSESSION}>Session</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="attendance">
            <Link to={routes.ATTENDANCE}>Attendance</Link>
          </Menu.Item>
          <Menu.Item name="admission">
            <Link to={routes.ADMISSION}>Admission</Link>
          </Menu.Item>
          <Menu.Item name="exams">
            Exams
            <Menu.Menu>
              <Menu.Item name="createExam">
                <Link to={routes.CREATEEXAM}>Create</Link>
              </Menu.Item>
              <Menu.Item name="evaluateExam">
                <Link to={routes.EVALUATEEXAM}>Evaluate</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="students">
            Students
            <Menu.Menu>
              <Menu.Item name="studentProfile">
                <Link to={routes.PROFILE}>Profile</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="admission">
            <Link to={routes.ADMISSION}>Admission</Link>
          </Menu.Item>
          <Menu.Item name="sections">
            Sections
            <Menu.Menu>
              <Menu.Item name="addSection">
                <Link to={routes.ADDSECTION}>Add Section</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="session">
            Sections
            <Menu.Menu>
              <Menu.Item name="startSession">
                <Link to={routes.STARTSESSION}>Start Session</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher as={Segment}>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default Layout;
