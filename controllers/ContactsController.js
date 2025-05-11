const ContactsModel = require('../models/ContactsModel');

class ContactsController {
    static async add(req, res) {
        try {
            const clientIP = req.headers['x-forwarded-for'] || req.ip;
            const contactData = {
                ...req.body,
                ip: clientIP.split(',')[0].trim()
            };
            await ContactsModel.addContact(contactData);
            res.redirect('/');
        } catch (error) {
            console.log(error)
            res.status(500).send('Error al guardar el contacto');
        }
    }

    static async contacts(req, res) {
        try {
            const contacts = await ContactsModel.getContacts();
        
            res.render('admin-contacts', { contacts });
        } catch (error) {
            res.status(500).send('Error al obtener contactos');
        }
    }



}

module.exports = ContactsController;