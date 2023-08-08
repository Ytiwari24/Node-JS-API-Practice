const express = require('express')
const router = express.Router()
// const uuid = require('uuid')
let events = require('../../Events')

///********GET ALL USERS**********///
router.get('/', (req, res) => {
    res.json(events);
});

module.exports = router