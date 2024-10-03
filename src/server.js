const express = require('express');
const app = express();

const mongodb = require('./data/database');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }

    console.log('Database initialized!');
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});