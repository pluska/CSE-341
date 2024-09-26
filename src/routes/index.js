const router = require('express').Router();

const contactsRouter = require('./contacts');


router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/contacts', contactsRouter);

module.exports = router;