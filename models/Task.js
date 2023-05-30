const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'must provide name'],
        trim : true, // make sure don't have any white space
        maxlength : [20, 'name cannot be more than 20 characters'],
        minlength : [2 , 'name cannot be less than 2 characters']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Task', TaskSchema);