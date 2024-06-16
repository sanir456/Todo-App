const express = require("express")
const cors = require("cors")
const { todoSchema, updateTodo } = require("./types.js")
const { todos }  = require("./db.js") 

const app = express()
app.use(cors())
app.use(express.json())

app.post("/todo",async (req,res) => {
    const todoRequest = req.body;
    console.log(req.body);
    const todoResponse = todoSchema.safeParse(todoRequest)
    if(!todoResponse.success){
        res.status(411).json({
            "msg":"Invalid input"
        })
        return;
    }

    await todos.create({
        title:todoRequest.title,
        desc:todoRequest.description,
        completed:false
    })

    res.json({
        "msg":"todo created"
    })

})

app.get("/todos",async (req,res) => {
    const allTodos = await todos.find()
    res.send({
        allTodos
    }) 
})

app.get("/todo", async (req,res) => {
    const id = req.query.id
    const todo =  await todos.find({_id:id})
    res.send({
        todo:todo[0]
    })
})

app.put("/completed",async (req,res) => {
    const idRequest = req.body
    const updateTodoResponse = updateTodo.safeParse(idRequest)
    console.log(idRequest);
    if(!updateTodoResponse.success) {
        res.status(411).json({
            "msg":"Invalid input"
        })
        return;
    }

    await todos.updateOne({_id:idRequest.id},{completed:true})
    res.json({
        "msg":"Todo updated"
    })
})

app.listen(3000)