import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const WarningModal = (props) => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='warning' content='Student Warning' />
    <Modal.Content>
    <p>It Should be integrated with the Attendance Page to show if a the input ID corresponds to a student with a warning</p>
    <p>There will be a single modal with all the warnings presented</p>
    <p>Payments will be clickable and prompt a confirmation, If confirmed; its warning will be removed.</p>
    <p>Skip will continue with the attendance. Deny will stop the process.</p>
    <ul>
      <li>Warning Sources:</li>
        <ul>
          <li>Due Payments(Permenant Until Change Occurs)</li>
          <li>Wanted(Permenant Until Change Occurs)</li>
          <li>Terminated(Permenant Until Change Occurs)</li>
          <li>Cross-Section Attendance(One-Time Warning)</li>
          <li>Double Abscence(One-Time Warning)</li>
        </ul>

    </ul>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> Deny
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Skip
      </Button>
    </Modal.Actions>
  </Modal>
)

export default WarningModal
