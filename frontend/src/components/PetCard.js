import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PetCard = props => (
  <Card style={{ width: "18rem" }} onPress>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>Breed: {props.breed}</Card.Text>
      <Card.Text>Status: {props.status}</Card.Text>
      <Link to="/aboutpet">
        <Button variant="primary">More Info</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default PetCard;
