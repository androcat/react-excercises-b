import logo from "./logo.svg";
import "./App.css";
import InfoForm from "./components/InfoForm";
import { useState } from "react";
import ContactsList from "./components/ContactsList";

function App() {
  const [persons, setPerson] = useState([]);

  const addPerson = (person) => {
    setPerson([...persons, person]);
  };

  return (
    <div>
      <InfoForm addPerson={addPerson} />
      <ContactsList persons={persons} />
    </div>
  );
}

export default App;
