import React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Input() {
  let id = "input_handler";
  let helper = input_helper();
  return (
    <div id={id}>
      {helper}
    </div>
  );
}

function input_helper() {
  return (
    // <Card>
    //   <Card.Body>This is some text within a card body.</Card.Body>
    // </Card>
    <Card className="card text-center" style={{ width: '18rem' }}>
      <Card.Header>Featured</Card.Header>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Input1</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Input2</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </Card>
  );
}

export default Input;