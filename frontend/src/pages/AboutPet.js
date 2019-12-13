import React from "react";
import Container from "react-bootstrap/Container";

const AboutPet = props => (
  <Container>
    {console.log(props)}
    <section>
      <h1>Name: {props.pet.name}</h1>
      <img>{props.pet.img}</img>
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
    <button id="adopt">Adopt Me!</button>
  </Container>
);

export default AboutPet;
