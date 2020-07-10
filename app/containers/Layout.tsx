import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  // Dropdown,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Container,
} from 'semantic-ui-react';
import routes from '../constants/routes.json';

// TODO: Make the sidebar's height constant across pages
// TODO: Make it look nicer, remove unnecessary spacing at the top
// TODO: Figure out why there are random line separations in the menu

class Layout extends Component {
  state = {
    sidebarVisibility: false,
  };
  setSidebarVisibility(visibility: Boolean) {
    this.setState({ sidebarVisibility: visibility });
  }
  render() {
    return (
      // <Sidebar.Pushable as={Segment}>
      <Sidebar.Pushable>
        {/* <Menu borderless>
          <Menu.Item fitted>
            <Button
              icon
              onClick={_e => this.setSidebarVisibility(true)}
            >
              <Icon name="bars" />
            </Button>
          </Menu.Item>
        </Menu> */}

        <Menu inverted size="large" style={{
          borderRadius: "0",
          marginBottom:"0"
        }}>
          <Menu.Item onClick={(_e) => this.setSidebarVisibility(true)}>
            <Icon name="bars" />
          </Menu.Item>
          <Container>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item position="right">
              <Button as="a" inverted>
                Log in
              </Button>
              <Button as="a" inverted primary style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
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
          <Menu.Item name="home" as={Link} to={routes.HOME}></Menu.Item>
          <Menu.Item name="payments">
            Payments
            <Menu.Menu>
              <Menu.Item
                name="payment"
                as={Link}
                to={routes.PAYMENT}
              ></Menu.Item>
              <Menu.Item
                name="paymentGroup"
                as={Link}
                to={routes.ADDPAYMENTGROUP}
              ></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="addFees">
            Add Fees
            <Menu.Menu>
              <Menu.Item
                name="addFeesToClass"
                as={Link}
                to={routes.ADDFEESTOCLASS}
              ></Menu.Item>
              <Menu.Item
                name="addFeesToStudent"
                as={Link}
                to={routes.ADDFEESTOSTUDENT}
              ></Menu.Item>
              <Menu.Item
                name="addFeesToSection"
                as={Link}
                to={routes.ADDFEESTOSECTION}
              ></Menu.Item>
              <Menu.Item
                name="addFeesToSession"
                as={Link}
                to={routes.ADDFEESTOSESSION}
              ></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item
            name="attendance"
            as={Link}
            to={routes.ATTENDANCE}
          ></Menu.Item>
          <Menu.Item
            name="admission"
            as={Link}
            to={routes.ADMISSION}
          ></Menu.Item>
          <Menu.Item name="exams">
            Exams
            <Menu.Menu>
              <Menu.Item
                name="createExam"
                as={Link}
                to={routes.CREATEEXAM}
              ></Menu.Item>
              <Menu.Item
                name="evaluateExam"
                as={Link}
                to={routes.EVALUATEEXAM}
              ></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="students">
            Students
            <Menu.Menu>
              <Menu.Item
                name="studentProfile"
                as={Link}
                to={routes.PROFILE}
              ></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="sections">
            Sections
            <Menu.Menu>
              <Menu.Item
                name="addSection"
                as={Link}
                to={routes.ADDSECTION}
              ></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item name="session">
            Sections
            <Menu.Menu>
              <Menu.Item
                name="startSession"
                as={Link}
                to={routes.STARTSESSION}
              ></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>{this.props.children}</Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default Layout;
