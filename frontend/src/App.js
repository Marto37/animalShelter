import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PetCard from "./components/PetCard";
import Navigation from "./components/Navigation";

const App = () => {
  const [pets, setPets] = React.useState([]);

  // creates cards on startup
  React.useEffect(() => {
    getPets();
  }, []);

  const getPets = () => {
    fetch("/pets")
      .then(res => res.json())
      .then(data => setPosts(data.pets));
  };

  const addPet = postData => {
    fetch("/pets", {
      method: "POST",
      body: JSON.stringify(postData),
      headers
    })
      .then(response => response.json())
      .then(data => setPets([...pets, data.pet]));
  };

  return (
    <div className="App">
      <Navigation />
      <Row>
        {pets.map(pet => (
          <PetCard
            name="hello"
            body="body"
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        ))}
      </Row>
    </div>
  );
};

export default App;
