import { useState, useEffect } from 'react'

 import './App.css'

import initialList from './components/ContactList/DATA_CONTACT.json'

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'


function App() {

  const DATA = window.localStorage.getItem("data-contact");

  const DATA_LIST = JSON.parse(DATA) == 0  ? initialList : JSON.parse(DATA);

  const [contact, setContact] = useState(DATA_LIST);
  const [search, setSearch] = useState('');

  const addContact = (newContact) => {
    setContact((prevList) => {
      return [...prevList, newContact];
    });
   }
  
  const deleteContact = (contactID) => {
     setContact(prevContact => {
      console.log(prevContact);
      
      return prevContact.filter(contact => contact.id !== contactID);
     })
  }

  const filteredContact = contact.filter((contact) => 
  contact.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    window.localStorage.setItem("data-contact",JSON.stringify(filteredContact));
  }, [filteredContact]);


  return (
    <>
    <header></header>
    <main>
     <h1>Phonebook</h1>
     <ContactForm onAdd={addContact}></ContactForm>
     <SearchBox value={search} setSearch={setSearch} />
     <ContactList initialList={filteredContact} onDelete={deleteContact} />
     </main>
     <footer></footer>
    </>
  )
  
}

export default App