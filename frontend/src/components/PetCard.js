import React from "react";
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PetCard = props => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.body}</Card.Text>
      <Button variant="info">View More Details</Button>
    </Card.Body>
  </Card>
);

export default PetCard;
