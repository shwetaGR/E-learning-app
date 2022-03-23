import React,{useState} from 'react'
import  validator  from 'validator'
import {v4 as uuidv4} from "uuid"
import {useSelector} from 'react-redux'

const RegisterFormData=(props)=>{
const{formSubmission, id:slNo, username:adminName, email:adminEmail,password:adminPassword,
                name:academyName, website:academyWebsite ,handleToggle }=props
     
    const[id,setId]=useState(slNo?slNo:uuidv4())
    const[username,setUserName]=useState(adminName?adminName:"")
    const[email,setEmail]=useState(adminEmail?adminEmail:"")
    const[password,setpassword]=useState(adminPassword?adminPassword:"")
    const[name,setName]=useState(academyName?academyName:"")
    const[website,setWebsite]=useState(academyWebsite?academyWebsite:"")
    const[formErrors,setFormErrors]=useState({})

    const errors={}

    const adminStore=useSelector((state)=>{
        return state.adminStore
    })

    const handleUserNameChange=(e)=>{
        setUserName(e.target.value)
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setpassword(e.target.value)
    }
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleWebsiteInput=(e)=>{
        setWebsite(e.target.value)
    }

  //validation
  const runValidation=()=>{
      if(username.trim().length===0){
          errors.username="username cannot be blank"
      }
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
      if(name.trim().length===0){
        errors.name="name cannot be blank"
    }
    if(website.trim().length===0){
        errors.website="website cannot be blank"
    }

  }

    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length===0){
            setFormErrors({})

        const formData={
            id:id,
            username:username,
            email:email,
            password:password,
            academy:{
                name:name,
                website:website
            }
            
        }
        formSubmission(formData)
            if(handleToggle){
                handleToggle()
            }
    }else {
        // console.log("form Errors", errors)
        setFormErrors(errors)
    }
}

    return(
        
        <div className="card w-75">
            <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
               {/* <label className="control-label">Username</label> */}
               <input 
                     type="text" 
                     value={username} 
                     onChange={handleUserNameChange} 
                     placeholder="Username"
                     className="form-control"
                   />
                   {formErrors.username &&<span style={{color:'red'}}>{formErrors.username}</span> }
                   <br/>
            </div>
            <div className="form-group">
            <input type="text" 
                   value={email} 
                   onChange={handleEmailChange} 
                   placeholder="Email"
                   className="form-control"
                   />
                   {formErrors.email &&<span style={{color:'red'}}>{formErrors.email}</span> }
                   <br/>
            </div>
           {adminStore.role==='admin'?
           <div className="form-group">
           <input type="password" 
                   value={password} 
                   onChange={handlePasswordChange} 
                   placeholder="Password"
                   className="form-control"
                   />
                   {formErrors.password &&<span style={{color:'red'}}>{formErrors.password}</span> }
                   <br/>
           </div>:''}
           <div className="form-group">
           <label className="form-label">Academy</label><br/>
            <input type="text" 
                   value={name} 
                   onChange={handleName} 
                   placeholder="Name"
                   className="form-control"/>

                   {formErrors.name &&<span style={{color:'red'}}>{formErrors.name}</span> }
                   <br/>
            <input type="text" 
                   value={website} 
                   onChange={handleWebsiteInput} 
                   placeholder="Website"
                   className="form-control"
                   />
                   {formErrors.website &&<span style={{color:'red'}}>{formErrors.website}</span> }
                   <br/>
           </div>
           <div>
                  <button className="btn btn-primary btn-md">create account</button>
              </div>
        </form>
        </div>
    </div>
    )
}
export default RegisterFormData