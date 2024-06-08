const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://root:1234567890@test.tzv3isg.mongodb.net/")

const todoSchema = new mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean
})

const todos = mongoose.model('todos',todoSchema)

module.exports = {todos}