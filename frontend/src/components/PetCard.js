import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MaterialIcon from "@material/react-material-icon";

const PetCard = props => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.pet.name}</Card.Title>
      <Card.Text>Breed: {props.pet.breed}</Card.Text>
      <Card.Text>Status: {props.pet.status}</Card.Text>
      <Link to="/aboutpet">
        <Button
          variant="primary"
          onClick={() => {
            props.setCurrPet(props.pet);
          }}
        >
          More Info
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

export default PetCard;
