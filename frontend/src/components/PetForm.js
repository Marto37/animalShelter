import React from "react";
import Form from "react-bootstrap/Form";

const PetForm = props => {
  return (
    <Form>
      <Form.Group controlId="petName">
        <Form.Label>Name</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Cat or Dog</Form.Label>
        <Form.Check type="radio" label="Cat" />
        <Form.Check type="radio" label="Dog" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Breed</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
    </Form>
  );
};

export default PetForm;
