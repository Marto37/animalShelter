import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PetCard from "./components/PetCard";

function App() {
  return (
    <div className="App">
      <PetCard name="hello" body="body" />
    </div>
  );
}

export default App;
