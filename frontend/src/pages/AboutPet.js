import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GiLoveInjection } from "react-icons/gi"
import { FaDog } from 'react-icons/fa'

const AboutPet = props => (
  <Container>
    <section>
      <h1>{props.pet.name}</h1>
      <img src={props.pet.url} align="left" className="responsive"></img>
      <div className="info">
        <p><FaDog /> {props.pet.breed}</p>
        <p><GiLoveInjection />{props.pet.status}</p>
        <p><IoMdInformationCircleOutline />
          {props.pet.gender === undefined ? "Male": props.pet.gender}, {props.pet.yearsOld} y/o
        </p>
      </div>
    </section>
    <br clear="left" />
    <h1>Description</h1>
    <p>{props.pet.description}</p>
    <Button id="adopt" href = "/" onClick={() => {
      props.removePet(props.pet._id);
      document.getElementById("adoptstatus").innerHTML = "This pet has been adopted!";
    }}><span id="adoptstatus">Adopt Me!</span></Button>
  </Container>
);

export default AboutPet;
