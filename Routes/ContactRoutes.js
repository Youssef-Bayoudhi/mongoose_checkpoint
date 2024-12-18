const express = require('express');

const ContactRoute = express.Router();

const {addNewContact, getAllContacts, getContactByID, updateContact} = require('../Controllers/ContactControllers');

ContactRoute.use(express.json());


//route update contact
//http://localhost:5003/contact/updateContact/:id
ContactRoute.put('/contact/updateContact/:id',updateContact);



//route get contact by ID
//http://localhost:5003/contact/getContact/:id
ContactRoute.get('/contact/getContact/:id', getContactByID);



//route get ALL Contact
//http://localhost:5003/contact/getALL
ContactRoute.get ('/contact/getALL',getAllContacts)


//route post Contact
//http://localhost:5003/contact/addContact
ContactRoute.post('/contact/addContact', addNewContact);

module.exports = ContactRoute;