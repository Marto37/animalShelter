import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GiLoveInjection } from "react-icons/gi";
import { FaDog } from 'react-icons/fa'

const PetCard = props => (
  <Card className="card" style={{ width: "18rem"}}>
    <div class="image">
      <Card.Img variant="top" src={props.pet.url} className="img img-responsive full-width"/>
    </div>
    <Card.Body>
      <Card.Title>{props.pet.name}</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item><FaDog /> {props.pet.breed}</ListGroup.Item>
        <ListGroup.Item><GiLoveInjection /> {props.pet.status}</ListGroup.Item>
        <ListGroup.Item><IoMdInformationCircleOutline />  {props.pet.gender === undefined ? "Male": props.pet.gender}, {props.pet.yearsOld} y/o</ListGroup.Item>
      </ListGroup>
      <Link to="/aboutpet">
        <Button className="moreInfo"
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
