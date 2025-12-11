const express = require('express');
const router = express.Router();
const controller = require('./students-controller');
const requireAuth = require('../../middlewares/auth');

router.get('/', requireAuth, controller.listStudents);
router.get('/:id', requireAuth, controller.getStudent);
router.post('/', requireAuth, controller.createStudent);
router.put('/:id', requireAuth, controller.updateStudent);
router.delete('/:id', requireAuth, controller.deleteStudent);

module.exports = router;