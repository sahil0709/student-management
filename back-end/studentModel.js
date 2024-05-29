const mongoose = require('mongoose')
const { type } = require('os')

const studentSchema = mongoose.Schema({
    roll_no: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    course: {type: String, required: true},
    marks: {type: Number, required: true}
})

module.exports=mongoose.model('studentdetails',studentSchema)