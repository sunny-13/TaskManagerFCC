const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,'Please provide a valid Task Name'],
        trim:true,
        maxlength:[25,'Max length excedded']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema);