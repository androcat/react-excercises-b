import { useState } from "react";

function InfoForm({ addPerson }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      firstName,
      lastName,
      address,
      phoneNumber,
    };

    addPerson(newPerson);
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <form className="personForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" name="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="form-control"
          placeholder="Alex"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" name="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className="form-control"
          placeholder="Smith"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" name="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          className="form-control"
          placeholder="123 Lemon Lane"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" name="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          className="form-control"
          placeholder="Alex"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default InfoForm;
