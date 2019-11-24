import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PetCard = props => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>Breed: {props.breed}</Card.Text>
      <Card.Text>Status: {props.status}</Card.Text>
      <Button variant="primary">View more details</Button>
    </Card.Body>
  </Card>
);

export default PetCard;
