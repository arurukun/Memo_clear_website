import axios from "axios";

export const createTodoA=(category,todoItems)=>async(dispatch,getState)=>{
    try{
        dispatch({type:"CREATE_TODO_REQ"})
        const {userLogin:{userInfo}}=getState()
        const config={headers:{"Content-Type":"application/json",Authorization:`Bearer ${userInfo.token}`}}
        const {data}=await axios.post(process.env.REACT_APP_BACKEND_URL+"/api/todo",{category,todoItems},config)
        dispatch({type:"CREATE_TODO_SUC",payload:data})
    }catch(e){
        dispatch({type:"CREATE_TODO_FAIL",payload:e.response&&e.response.message ? e.response.message : e.message})
    }
}

export const listTodoA=()=>async(dispatch,getState)=>{
    try{
        dispatch({type:"LIST_TODO_REQ"})
        const {userLogin:{userInfo}}=getState()
        const config={headers:{"Content-Type":"application/json",Authorization:`Bearer ${userInfo.token}`}}
        const {data}=await axios.get(process.env.REACT_APP_BACKEND_URL+"/api/todo",config)
        dispatch({type:"LIST_TODO_SUC",payload:data})
    }catch(e){
        dispatch({type:"LIST_TODO_FAIL",payload:e.response&&e.response.message ? e.response.message : e.message})
    }
}

export const getTodoA=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:"GET_TODO_REQ"})
        const {userLogin:{userInfo}}=getState()
        const config={headers:{"Content-Type":"application/json",Authorization:`Bearer ${userInfo.token}`}}
        const {data}=await axios.get(process.env.REACT_APP_BACKEND_URL+`/api/todo/edit/${id}`,config)
        dispatch({type:"GET_TODO_SUC",payload:data})
    }catch(e){
        dispatch({type:"GET_TODO_FAIL",payload:e.response&&e.response.message ? e.response.message : e.message})
    }
}

export const editTodoA=(id,category,todoItems)=>async(dispatch,getState)=>{
    try{
        dispatch({type:"EDIT_TODO_REQ"})
        const {userLogin:{userInfo}}=getState()
        const config={headers:{"Content-Type":"application/json",Authorization:`Bearer ${userInfo.token}`}}
        const {data}=await axios.put(process.env.REACT_APP_BACKEND_URL+`/api/todo/edit/${id}`,{category,todoItems},config)
        dispatch({type:"EDIT_TODO_SUC",payload:data})
    }catch(e){
        dispatch({type:"EDIT_TODO_FAIL",payload:e.response&&e.response.message ? e.response.message : e.message})
    }
}

export const deleteTodoA=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:"DELETE_TODO_REQ"})
        const {userLogin:{userInfo}}=getState()
        const config={headers:{"Content-Type":"application/json",Authorization:`Bearer ${userInfo.token}`}}
        const {data}=await axios.delete(process.env.REACT_APP_BACKEND_URL+`/api/todo/edit/${id}`,config)
        dispatch({type:"DELETE_TODO_SUC",payload:data})
    }catch(e){
        dispatch({type:"DELETE_TODO_FAIL",payload:e.response&&e.response.message ? e.response.message : e.message})
    }
}

export const addWriteUserTodoA=(id,selectedUser)=>async(dispatch,getState)=>{
    try{
        dispatch({type:"ADD_WRITE_USER_TODO_REQ"})
        const {userLogin:{userInfo}}=getState()
        const config={headers:{"Content-Type":"application/json",Authorization:`Bearer ${userInfo.token}`}}
        console.log("data")
        const {data}=await axios.post(process.env.REACT_APP_BACKEND_URL+`/api/todo/selectWriteUser/${id}`,{selectedUser},config)
        console.log(data)
        dispatch({type:"ADD_WRITE_USER_TODO_SUC",payload:data})
    }catch(e){
        dispatch({type:"ADD_WRITE_USER_TODO_FAIL",payload:e.response&&e.response.message ? e.response.message : e.message})
    }
}

export const addReadUserTodoA=(id,selectedUser)=>async(dispatch,getState)=>{
    try{
        dispatch({type:"ADD_READ_USER_TODO_REQ"})
        const {userLogin:{userInfo}}=getState()
        const config={headers:{"Content-Type":"application/json",Authorization:`Bearer ${userInfo.token}`}}
        console.log(id)
        console.log(process.env.REACT_APP_BACKEND_URL+`/api/todo/selectReadUser/${id}`)
        const {data}=await axios.post(process.env.REACT_APP_BACKEND_URL+`/api/todo/selectReadUser/${id}`,{selectedUser},config)
        dispatch({type:"ADD_READ_USER_TODO_SUC",payload:data})
    }catch(e){
        dispatch({type:"ADD_READ_USER_TODO_FAIL",payload:e.response&&e.response.message ? e.response.message : e.message})
    }
}