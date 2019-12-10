import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PetCard from "../components/PetCard";
import "../index.css";
import PetModal from "../components/PetModal";
import Button from "react-bootstrap/Button";

const Home = props => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container fluid>
      <h1>Cats</h1>
      <div className="cards">
        {props.cats.map(cat => (
          <PetCard
            pet={cat}
            setCurrPet={props.setCurrPet}
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        ))}
      </div>
      <h1>Dogs</h1>
      <div className="cards">
        {props.dogs.map(dog => (
          <PetCard
            pet={dog}
            setCurrPet={props.setCurrPet}
            img="https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg"
          />
        ))}
      </div>
      <Button onClick={() => setModalShow(true)}>Add Pet</Button>
      <PetModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddPet={e => console.log(e)}
      />
    </Container>
  );
};

export default Home;
