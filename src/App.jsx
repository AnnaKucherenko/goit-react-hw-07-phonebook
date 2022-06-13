import React from 'react';
import { useSelector } from 'react-redux';
import FormAddContact from './components/form/FormAddContact';
import ContactList from 'components/contactList/ContactList';
import Filter from './components/filter/Filter';
import { ContactsPage } from 'pages/ContactsPage';
  
function App() {
  // const contacts = useSelector((state) => state.contacts.contacts.items);
          
  return (
      <div>
        
        <ContactsPage/>
        
      </div>
  ); 
  
}

export default App;
