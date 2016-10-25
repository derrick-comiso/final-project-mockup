import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Derrick',
    last: 'Comiso',
    address: 'L&L',
    telephone: 'Katsu Curry Bowl',
    email: 'dcomiso@hawaii.edu',
  },
  {
    first: 'Ellen',
    last: 'Dan',
    address: 'Waianae HI, 96792',
    telephone: '808-420-7654',
    email: 'edan@hawaii.edu',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
