import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Form, Input, Button } from 'semantic-ui-react';

const Payment = props => (
  <div>
    <Form onSubmit={props.submitHandler}>
      <Form.Input
        label="ID"
        placeholder="1"
        required
        name="id"
        value={props.formData.id}
        onChange={props.inputHandler}
      />
      <Button type="submit">Find</Button>
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

      <Table.Body>{props.table}</Table.Body>
    </Table>
  </div>
);

export default Payment;
