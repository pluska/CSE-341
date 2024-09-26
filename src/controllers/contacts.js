const mongodb = require('../data/database');


const getAllContacts = (req, res) => {
    const result = mongodb.getDatabase().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.status(200).json(contacts);
    });
};

const getContactById = (req, res) => {
    const id = req.params.id;
    const result = mongodb.getDatabase().collection('contacts').find({ _id: id });
    result.toArray().then((contacts) => {
        res.status(200).json(contacts);
    });
};



module.exports = {
    getAllContacts,
    getContactById
}