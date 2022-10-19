import React, { useState, useEffect } from 'react'
import List from './List';
import Form from './Form';
import './style.css';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Mehmet',
      phone_number: '123123'
    }, {
      fullname: 'Ayse',
      phone_number: '456456'
    }, {
      fullname: 'Nazli',
      phone_number: '789789'
    }
  ]);
  useEffect(() => {
    console.log(contacts);
  })
  return (
    <div>
      <div className="container">
      <h1>Contacts</h1>
        <List pushcontacts={contacts} />
        <Form addcontacts={setContacts} pushcontacts={contacts} />
      </div>

    </div>
  )
}

export default Contacts