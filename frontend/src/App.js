<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import React from "react";
import logo from "./logo.svg";
import Row from "react-bootstrap/Row";
import "./App.css";
import PetCard from "./components/PetCard";
import Navigation from "./components/Navigation";

const App = () => {
  const [pets, setPets] = React.useState([]);
  const headers = { "Content-Type": "application/json" };

  // creates cards on startup
  React.useEffect(() => {
    getPets();
  }, []);

  const getPets = () => {
    fetch("/pets")
      .then(res => res.json())
      .then(data => setPets(data.pets));
  };

  const addPet = data => {
    fetch("/pets", {
      method: "POST",
      body: JSON.stringify(data),
      headers
    })
      .then(response => response.json())
      .then(data => setPets([...pets, data.pet]));
  };

  return (
    <div className="App">
      <Navigation />
      <Row>
        {console.log(pets)}
        {pets.map(pet => (
          <PetCard
            name={pet.name}
            body={pet.breed}
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        ))}
      </Row>
    </div>
  );
};
>>>>>>> master

export default App;
