const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

router.get('/', function (req, res) {
    res.render('index', { title: "Hello Everyone", users: users });
});

module.exports = router;

