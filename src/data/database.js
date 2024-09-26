const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (cb) => {
    if (database) {
        return cb(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            database = client.db();
            return cb(null, database);
        })
        .catch((err) => {
            return cb(err);
        });
};

const getDatabase = () => {
    initDb();
    return database;
};

module.exports = {
    initDb,
    getDatabase
}