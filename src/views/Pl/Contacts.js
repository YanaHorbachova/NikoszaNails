import React, { Component } from 'react';
import Section from '../../components/Section/Section';
import SimpleMap from '../../components/ContactsItem/Map';
import ContactList from '../../components/ContactsItem/ContactList';
import {pl} from '../../components/ContactsItem/items.json'
import s from '../../components/ContactsItem/Contacts.module.css'

class Contacts  extends Component {

render () {
    return (
        <Section > 
           <div className={s.Contacts}>           
                <SimpleMap/>
                <ContactList items={pl}/>
            </div>
        </Section>
    );
};
}


export default Contacts;