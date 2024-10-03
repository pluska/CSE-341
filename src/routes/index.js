const router = require('express').Router();

const contactsRouter = require('./contacts');


router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});

router.use('/contacts', contactsRouter);

module.exports = router;