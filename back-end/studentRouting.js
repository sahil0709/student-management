const express = require('express')
const studcontroller = require('./studentController')
const route = express.Router()

route.post('/register', studcontroller.addStudent)

route.get('/finddata', studcontroller.getAllStudents)

route.put('/updatedata/:roll_no', studcontroller.updateStudent)

route.delete('/deleteuser/:roll_no', studcontroller.deleteStudent);

module.exports=route