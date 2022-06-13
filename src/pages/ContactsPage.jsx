import ContactList from "components/contactList/ContactList";
import FormAddContact from '../components/form/FormAddContact';
import Filter from '../components/filter/Filter';
import { useFetchContactsQuery } from "Redax/contactsSlice";

export const ContactsPage=()=>{
    const {data, isFetching} = useFetchContactsQuery();
    return <div>
        <h1>Phonebook</h1>
        <FormAddContact contacts={data}/>
        
        <h2>Contacts</h2>
        <Filter />
        {data&& <ContactList contacts={data}/>}
        </div>
}