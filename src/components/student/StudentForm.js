import React ,{useState} from 'react'
import  validator  from 'validator'
import {v4 as uuidv4} from "uuid"

const StudentForm=(props)=>{
    const{formSubmission,handleToggle,id:slNo, name:studentName,email:studentEmail,
            password:studentPasssword, isAllowed:studentIsAllowed }=props
    const[id,setId]=useState(slNo?slNo:uuidv4())       
    const[name,setName]=useState(studentName?studentName:'')
    const[email,setEmail]=useState(studentEmail?studentEmail:'')
    const[password,setPassword]=useState(studentPasssword?studentPasssword:'')
    const[isAllowed,setIsAllowed]=useState(studentIsAllowed?studentIsAllowed:true)
    const[formErrors,setFormErrors]=useState({})

    const errors={}

const handleNameChange=(e)=>{
    setName(e.target.value)
}
const handleEmailChange=(e)=>{
    setEmail(e.target.value)
}
const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
}
const handleIsAllowedChange=(e)=>{
    setIsAllowed(e.target.checked)
}
//validation
const runValidation=()=>{
    if(name.trim().length===0){
        errors.name="name cannot be blank"
    }
    if(email.trim().length===0){
        errors.email="email cannot be blank"
    }else if(!validator.isEmail(email)){
        errors.email="invalid email formate, e.g-@gmail.com"
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

    const studentFormData={
        id:id,
        name:name,
        email:email,
        password:password,
        isAllowed:isAllowed
    }
    // console.log(studentFormData,"studentFormData")
    formSubmission(studentFormData)
    if(handleToggle){
        handleToggle()
    }
} else {
        // console.log("form Errors", errors)
        setFormErrors(errors)
    }
}

    return(
        <div   className="card w-75">
        <div className="card-body">
            <form onSubmit={handleSubmit} >
                <input type="text" 
                       value={name} 
                       onChange={handleNameChange} 
                       placeholder="Name"
                       className="form-control"
                       />
                       {formErrors.name &&<span style={{color:'red'}}>{formErrors.name}</span> }
                <br/>
                <input type="text" 
                       value={email} 
                       onChange={handleEmailChange} 
                       placeholder="Email"
                       className="form-control"
                       />
                       {formErrors.email &&<span style={{color:'red'}}>{formErrors.email}</span> }
                 <br/>
                <input type="password" 
                       value={password} 
                       onChange={handlePasswordChange} 
                       placeholder="Password"
                       className="form-control"
                       />
                       {formErrors.password &&<span style={{color:'red'}}>{formErrors.password}</span> }
                <br/>
                <input type="checkbox" 
                       checked={isAllowed} 
                       onChange={handleIsAllowedChange} 
                       />
                <label>isAllowed</label>
                <br/>
                <button className="btn btn-primary btn-md">Add</button>
            </form>
        </div>
        
        </div>
    )
}
export default StudentForm