const express = require('express');
const router = express.Router();
const {getAllTasks,addTask,getTask,updateTask,deleteTask,deleteAll} =  require('../controllers/tasks')

// router.get('/',getTasks);

// router.post('/',addTask);
router.route('/delall').delete(deleteAll);
router.route('/').get(getAllTasks).post(addTask);
// router.patch('/:id',updateTask);

// router.delete('/:id',deleteTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;