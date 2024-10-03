const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
    //#swagger.tags=['Contacts']
    const result = await mongodb.getDatabase().collection('contacts').find();
    if (result) {
        result.toArray().then((contacts) => {
            res.status(200).json(contacts);
        });
    }
    else {
        res.status(500).json({ error: 'An error occurred while retrieving contacts.' });
    }
};

const getContactById = async (req, res) => {
    //#swagger.tags=['Contacts']
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().collection('contacts').find({ _id: id });
    if (result) {
        result.toArray().then((contacts) => {
            res.status(200).json(contacts[0]);
        });
    }
    else {
        res.status(404).json({ error: 'Contact not found.' });
    }
};

const createContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
        };
    const result = await mongodb.getDatabase().collection('contacts').insertOne(newContact);
    if (result.insertedCount === 0) {
        res.status(500).json({ error: 'An error occurred while creating the contact.' });
        return;
    }
    res.status(201).json({ message: 'Contact created successfully.' });
};

const updateContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const id = new ObjectId(req.params.id);
    const updateContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
        };
    const result = await mongodb.getDatabase().collection('contacts').replaceOne(
        { _id: id },
        updateContact,
    );
    if (result.modifiedCount === 0) {
        console.log(result);
        res.status(500).json({ error: 'An error occurred while updating the contact.' });
        return;
    }
    res.status(200).json({ message: 'Contact updated successfully.' });
};

const deleteContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const id = req.params.id;
    const result = await mongodb.getDatabase().collection('contacts').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
        res.status(500).json({ error: 'An error occurred while deleting the contact.' });
        return;
    }
    res.status(200).json({ message: 'Contact deleted successfully.' });
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};