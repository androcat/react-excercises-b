import logo from "./logo.svg";
import "./App.css";
import InfoForm from "./components/InfoForm";
import { useState } from "react";

function App() {
  const [persons, setPerson] = useState([]);

  const addPerson = (person) => {
    setPerson([...persons, person]);
  };

  return <InfoForm addPerson={addPerson} />;
}

export default App;
