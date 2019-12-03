import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ConfirmPaymentModal = (props) => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='warning' content='Payment Confirmation' />
    <Modal.Content>
    <ul style={{ listStyleType: 'none' }}>
      <li>Name: A-1 Monthly Fees</li>
      <li>Value: 100EGP</li>
    </ul>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Confirm
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ConfirmPaymentModal
