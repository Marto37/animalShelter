import React from "react";
import logo from "./logo.svg";
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
  const headers = { "Content-Type": "application/json" };

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

  // const addPet = data => {
  //   fetch("/pets", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers
  //   })
  //     .then(response => response.json())
  //     .then(data => setPets([...pets, data.pet]));
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
          <AboutPet pet={currPet} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
