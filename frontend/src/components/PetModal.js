import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PetForm from "./PetForm";

const PetModal = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add A New Pet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PetForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={e => {
            props.onHide();
            props.onAddPet(e);
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PetModal;
