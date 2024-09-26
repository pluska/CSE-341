const router = require('express').Router();

const contactsRouter = require('./contacts');


router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/contacts', contactsRouter);

module.exports = router;