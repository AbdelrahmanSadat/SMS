import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Form, Input, Button } from 'semantic-ui-react';


const Payment = (props) => (
  <div>
    <Form>
      <Form.Field inline>
        <label>ID</label>
        <Input/>
      </Form.Field>
    </Form>
    <p>ID: Fetched From DB</p>
    <p>Name: Fetched From DB</p>
    <p>Class: Fetched From DB</p>
    <p>Section: Fetched From DB</p>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>ملازم</Table.Cell>
          <Table.Cell>100 EGP</Table.Cell>
          <Table.Cell><button>Pay</button></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>شهر</Table.Cell>
          <Table.Cell>80 EGP</Table.Cell>
          <Table.Cell><button>Pay</button></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>موقغ</Table.Cell>
          <Table.Cell>20 EGP</Table.Cell>
          <Table.Cell><button>Pay</button></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)

export default Payment
