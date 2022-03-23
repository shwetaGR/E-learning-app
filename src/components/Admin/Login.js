import React ,{useState} from 'react'
import validator  from 'validator' 
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { startLoginData } from '../../redux/action/admin/adminAction'
import { startAllStudentInfo, startStudentLoginData } from '../../redux/action/student/studentAction'


const Login=(props)=>{

    const[role,setRole]=useState('')  //radio button
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[formErrors,setFormErrors]=useState({})

    const dispatch=useDispatch()
    const errors={}

    const handleRoleChange=(e)=>{
        setRole(e.target.value)
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
   //validation
    const runValidation=()=>{
        if(email.trim().length===0){
            errors.email="email cannot be blank"
        }else if(!validator.isEmail(email)){
            errors.email="invalid email formate"
        }
        if(password.trim().length===0){
          errors.password="password cannot be blank"
        }else if(password.trim().length<8){
            errors.password="password must be 8 to 16 charecters"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length===0){
            setFormErrors({})

        const loginData={
            id:Number(new Date()),
            role:role,
            email:email,
            password:password
        }
        if(role==="admin"){
            dispatch(startLoginData(loginData))
            localStorage.setItem("role","admin")
            // dispatch(startAllStudentInfo())
            props.history.push("/")
            props.handleAuth()
        }else{
        dispatch(startStudentLoginData(loginData))
        localStorage.setItem("role","student")
        props.history.push("/courses")
        props.handleAuth()
         }
        console.log("loginData",loginData)
        
    }else {
            console.log("form Errors", errors)
            setFormErrors(errors)
    }
}

    return(
        <div className="row mt-3" >
        <div className="card" style={{width:'20rem'}}>
            <div className="card-body">
            <h4 className="card-title">Login to your account</h4>
            <div className="row mt-3" >
           {/* <div className="col-md-5 col-md-offset-4"> */}
                 {/* <h4>Login to your account</h5> */}
        <form onSubmit={handleSubmit}>
        <input type="text" 
               value={email} 
               onChange={handleEmailChange}
               placeholder="Email"
               className="form-control"/>
               {formErrors.email &&<span style={{color:'red'}}>{formErrors.email}</span> }
               <br/>
        <input type="password"
               value={password}
               onChange={handlePassword}
               placeholder="Password"
               className="form-control"
               />
               {formErrors.password &&<span style={{color:'red'}}>{formErrors.password}</span> }
               <br/>
               <label className="form-check-label">Login Type</label>
               <div className="form-check">
                 <input type="radio" 
                        name="role" 
                        value="admin" 
                        checked={role=='admin'}
                        onChange={handleRoleChange} 
                        className="form-check-input"/>Admin 
                    </div>
             <div className="form-check">  
             <input type="radio" 
                    name="role" 
                    value="student" 
                    checked={role=='student'}
                    onChange={handleRoleChange} 
                    className="form-check-input"/>Student
                </div>
                <br/>
            <button className="btn btn-primary btn-md" >Login</button>
        </form>
        </div>
        </div>
        </div>
         </div>
    )
}
export default Login















