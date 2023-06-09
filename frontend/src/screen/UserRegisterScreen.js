import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userRegisterA } from '../actions/userAction'

export const UserRegisterScreen = ({location,history}) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [message,setMessage]=useState("")
    const {loading,error}=useSelector((s)=>s.userRegister)
    const {userInfo}=useSelector((s)=>s.userLogin)

    const dispatch=useDispatch()
    const redirect=location.search ? location.search.split("=")[1] : "/"

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[userInfo,redirect])

    const submitHandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage("Passwords doesn't much")
        }else{
            dispatch(userRegisterA(name,email,password))
        }
    }
  return (
    <div className='container py-8'>
        <div className=' border-2 border-orange-800 flex flex-col md:w-6/12 mx-auto py-4'>
            <h1 className='tytle'>Register</h1>
            <form className='p-3'>
                {loading && <div className='loading'>Loading...</div>}
                {error && <div className='error'>{error}</div>}
                {message && <div className='error'>{message}</div>}
                <div className='mt-3'>
                    <label className='mr-14'>Name</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter your Name' className='input'></input>
                </div>
                <div className='mt-3'>
                    <label className='mr-14'>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='Enter your Email' className='input'></input>
                </div>
                <div className='mt-3'>
                    <label className='mr-7' >Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter your Password' className='input'></input>
                </div>
                <div className='mt-3'>
                    <label className='mr-7' >Confirm Password</label>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} type="password" placeholder='Enter your ConfirmPassword' className='input'></input>
                </div>
                <button onClick={submitHandler} className='btn btn-size-big'>Submit</button>
                <p>Are you a member?<Link to={redirect ? `login?redirect=${redirect}` : "/login"} className='underline'>Login here</Link></p>
            </form>
        </div>
    </div>
  )
}
