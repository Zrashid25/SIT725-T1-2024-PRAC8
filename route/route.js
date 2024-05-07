var express = require('express');
var router = express.Router();
let controller = require('../controller/controller');

router.post('/api/cat', (req, res) => {
    controller.insertCat(req, res);
});

router.get('/api/cat', (req, res) => {
    controller.getAllCats(req, res);
});

router.delete('/api/cat', (req, res) => {
    controller.remove(req, res);
});

module.exports = router;