const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async')
const {customError} = require('../errors/error')

const getAllTasks = asyncWrapper( async (req,res) => {
    
    const tasks = await Task.find({});
    res.status(200).json({tasks});
    
})
const addTask = asyncWrapper( async (req,res) => {
    
    const task = await Task.create(req.body);
    res.status(201).json({task});
    
})

const getTask = asyncWrapper( async (req,res) => {
    const {id} = req.params;
    
    const task = await Task.findOne({_id:id})
    if(!task){
        return next(customError(`No task found with id : ${id}`,404));
    }
    res.status(200).json({task});

})

const updateTask = asyncWrapper( async (req,res) => {
    const {id} = req.params;
    
    const task = await Task.findByIdAndUpdate({_id:id},req.body,{
        new:true,
        runValidators:true
    })
    if(!task) return res.status(400).json({msg:`No task found with id : ${id}`})
    res.status(200).json({task});

})
const deleteTask = asyncWrapper( async (req,res) => {
    const {id} = req.params;
    
    const task = await Task.findOneAndDelete({_id:id})
    if(!task){
        return res.status(404).json({msg:`No task with id : ${id} found`})
    }
    res.status(200).json({msg:`Task with id: ${id} deleted`});
    
})

const deleteAll = asyncWrapper( async (req,res) => {
    
    const {deletedCount} = await Task.deleteMany({});
    res.status(200).json({success:true,delCount:deletedCount});
    
})

module.exports = {getAllTasks,addTask,getTask,updateTask,deleteTask,deleteAll}