const express = require('express');
const router = express.Router();

router.use('/students', require('../modules/students/students-routes'));

module.exports = router;