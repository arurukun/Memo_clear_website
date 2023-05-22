import { Schema,model } from "mongoose";

const todoSchema=Schema({
    owner:{type:Schema.Types.ObjectId,required:true,ref:"User"},
    category:{type:String,required:true},
    todoItem:[{
        checkbox:{type:Boolean,required:true,default:false},
        todoList:{type:String,required:true}
    }],
    readUser:[{type:Schema.Types.ObjectId,required:true,ref:"User"}],
    writeUser:[{type:Schema.Types.ObjectId,required:true,ref:"User"}],

},{timestamps:true})

const Todo=model("Todo",todoSchema)
export default Todo