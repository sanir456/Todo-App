import { todoSchema, updateTodo } from "./types"

const express = require("express")
const app = express()
app.unlink(express.json())

app.post("/todo", (req,res) => {
})

app.get("/todos", (req,res) => {
})

app.put("/completed", (req,res) => {
})