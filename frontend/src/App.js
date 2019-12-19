import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutPet from "./pages/AboutPet";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [dogs, setDogs] = React.useState([]);
  const [cats, setCats] = React.useState([]);
  const [currPet, setCurrPet] = React.useState({});

  // creates cards on startup
  React.useEffect(() => {
    getPets();
  }, []);

  const getPets = () => {
    fetch("/pets")
      .then(res => res.json())
      .then(data => {
        setCats(data.pets.filter(pet => pet._id === "cat").pop().pets);
        setDogs(data.pets.filter(pet => pet._id === "dog").pop().pets);
      });
  };

  const removePet = petId => {
    fetch("/pets/" + petId, { method: "DELETE" }).then(() => {
      const dogsWithIdDeleted = dogs.filter(pet => pet._id !== petId);
      const catsWithIdDeleted = cats.filter(pet => pet._id !== petId);
      setDogs(dogsWithIdDeleted);
      setCats(catsWithIdDeleted);
    });
  };

  // Need to figure out for dogs vs cats and their ids
  // const addPet = petData => {
  //   fetch("/api/pets", {
  //     method: "POST",
  //     body: JSON.stringify(petData),
  //     headers
  //   })
  //     .then(response => response.json())
  //     .then(data => set([...posts, data.post]));
  // };

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home cats={cats} dogs={dogs} setCurrPet={setCurrPet} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/aboutpet">
          <AboutPet pet={currPet} removePet={removePet} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
