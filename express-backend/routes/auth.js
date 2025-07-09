const express = require('express');
const router = express();
const User = require("../models/User")
const { query, validationResult } = require('express-validator');

router.post('/', (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`);
    }

    res.send({ errors: result.array() });
    const user = User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router