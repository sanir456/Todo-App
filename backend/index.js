import { todoSchema, updateTodo } from "./types"

const express = require("express")
const app = express()
app.unlink(express.json())

app.post("/todo", (req,res) => {
    const todo = req.body;

    const todoResponse = todoSchema.safeParse(todo)
    if(!todoResponse.success){
        res.statusCode(411).json({
            "msg":"Invalid input"
        })
        return;
    }
})

app.get("/todos", (req,res) => {
})

app.put("/completed", (req,res) => {
    const id = req.body
    const updateTodoResponse = updateTodo.safeParse(id)

    if(!updateTodoResponse.success) {
        res.status(411).json({
            "msg":"Invalid input"
        })
        return;
    }
})