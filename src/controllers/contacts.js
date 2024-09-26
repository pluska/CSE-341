const mongodb = require('../data/database');


const getAllContacts = (req, res) => {
    const result = mongodb.getDatabase().db('contacts').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.status(200).json(contacts);
    });
};

const getContactById = (req, res) => {
    const id = req.params.id;
    const result = mongodb.getDatabase().db('contacts').collection('contacts').find({ _id: id });
    result.toArray().then((contacts) => {
        res.status(200).json(contacts[0]);
    });
};



module.exports = {
    getAllContacts,
    getContactById
}