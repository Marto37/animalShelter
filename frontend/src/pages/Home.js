import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PetCard from "../components/PetCard";

const Home = props => (
  <Container>
    <h1>Cats</h1>
    <Row>
      {props.cats.map(cat => (
        <PetCard
          name={cat.name}
          breed={cat.breed}
          status={cat.status}
          old={cat.yearsOld}
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      ))}
    </Row>
    <h1>Dogs</h1>
    <Row>
      {props.dogs.map(dog => (
        <PetCard
          name={dog.name}
          breed={dog.breed}
          status={dog.status}
          old={dog.yearsOld}
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      ))}
    </Row>
  </Container>
);

export default Home;
