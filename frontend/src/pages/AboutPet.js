import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const AboutPet = props => (
  <Container>
    <section>
      <h1>Name: {props.pet.name}</h1>
      <img src={props.pet.url}></img>
      <dl>
        <dt>Breed: {props.pet.breed}</dt>
        <dt>Status: {props.pet.status}</dt>
        <dt>
          {props.pet.gender}, {props.pet.age}
        </dt>
      </dl>
    </section>
    <h1>Description</h1>
    <p>{props.pet.description}</p>
    <Button id="adopt" onClick={() => props.removePet(props.pet._id)}>
      Adopt Me!
    </Button>
  </Container>
);

export default AboutPet;
