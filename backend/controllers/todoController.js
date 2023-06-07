import asyncHandler from "express-async-handler"
import Todo from "../models/todoModel.js"

export const createTodo=asyncHandler(async(req,res)=>{
    const {category,todoItems}=req.body
    if(category&&category.length<=0){
        res.json("ToDoList is empty")
    }else{
        const todolist=new Todo({category,owner:req.user._id})
        // todolist.push(todoItems)
        for(let item in todoItems){
            todolist.todoItems.push(todoItems[item])
        }
        // for(let i = 0; i < todoItems.length; i++){
        //     todolist.todoItems.push(todoItems[i])
        // }
        todolist.writeUser.push(req.user._id)
        const createdTodolist=await todolist.save()
        // const user = req.user
        req.user.todoList.push(createdTodolist._id)
        await req.user.save()
        res.status(202).json(createdTodolist)
    }
})

export const getListTodo=asyncHandler(async(req,res)=>{
    const userPopulate=await req.user.populate("todoList","_id category todoItems updateAt")
    console.log(userPopulate)
    const todoList=userPopulate.todoList
    console.log(todoList)
    if(todoList){
        res.json(todoList)
    }else{
        res.status(404).send("Todo is empty")
    }
})

export const getTodo=asyncHandler(async(req,res)=>{
    const user=req.user
    const todoId=req.params.id
    if(user.todoList.includes(todoId) || user.todoList.includes(todoId)){
        const todo=await Todo.findById(todoId)
        res.send(todo)
    }else{
        res.status(401).send("Not authorized")
    }
})

export const editTodo=asyncHandler(async(req,res)=>{
    const {category,todoItems}=req.body
    const todo=await Todo.findById(req.params.id)
    const user=req.user
    if(todo){
        if(user&&user.todoList.includes(todo._id)){
            todo.category=category||todo.category
            todo.todoItems=todoItems||todo.todoItems
            const updatedTodo=await todo.save()
            res.send(updatedTodo)
        }else{
            res.status(401).send("Not authorized")
        }
    }else{
        res.status(404).send("Todo is not found")
    }
})