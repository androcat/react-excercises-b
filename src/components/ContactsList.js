function ContactsList({ persons }) {
  const contactsHTML = persons.map((person, index) => (
    <li key={index}>
      <h1>
        Name: {person.firstName} {person.lastName}
      </h1>
      <p>Address: {person.address}</p>
      <p>Address: {person.phoneNumber}</p>
    </li>
  ));

  return <ul className="contactList">{contactsHTML}</ul>;
}

export default ContactsList;
