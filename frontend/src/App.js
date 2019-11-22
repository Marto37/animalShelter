import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PetCard from "./components/PetCard";
import Navigation from "./components/Navigation";

const App = () => {
  const [pets, setPets] = React.useState([]);

  fetch("getpets")
    .then(response => {
      return response.json();
    })
    .then(pet => {
      setPets([...pets, pet]);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div className="App">
      <Navigation />
      <PetCard
        name="hello"
        body="body"
        img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
    </div>
  );
};

export default App;
