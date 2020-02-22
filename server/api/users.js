const router = require('express').Router();
const { models } = require('../db/index');

const { User, Session } = models;
// log in
router.post('/login', (req,res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            return res.state(401).send('User not found');
        }else{

        }
    })
    .catch(e => {
        res.status(500).send('Internal Error');
        next(e)
    })
})

module.exports = router;