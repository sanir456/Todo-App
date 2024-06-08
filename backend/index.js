import { todoSchema, updateTodo } from "./types.js"
import { todo } from "./db.js"

const express = require("express")
const app = express()
app.unlink(express.json())

app.post("/todo",async (req,res) => {
    const todoRequest = req.body;

    const todoResponse = todoSchema.safeParse(todoRequest)
    if(!todoResponse.success){
        res.statusCode(411).json({
            "msg":"Invalid input"
        })
        return;
    }

    await todo.create({
        title:todoRequest.title,
        desc:todoRequest.desc,
        completed:false
    })

    res.json({
        "msg":"todo created"
    })

})

app.get("/todos",async (req,res) => {
    const allTodos = await todo.find()
    res.send({
        allTodos
    }) 
})

app.put("/completed",async (req,res) => {
    const idRequest = req.body
    const updateTodoResponse = updateTodo.safeParse(idRequest)

    if(!updateTodoResponse.success) {
        res.status(411).json({
            "msg":"Invalid input"
        })
        return;
    }

    const todo = await todo.update({_id:idRequest.id},{completed:true})
    res.json({
        "msg":"Todo updated"
    })
})

app.listen(3000)