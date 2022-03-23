import React,{useState} from 'react'
// import {useSelector } from 'react-redux'
import RegisterFormData from './RegisterFormData'
import { startEditInfo } from '../../redux/action/admin/adminAction'
import { useDispatch } from 'react-redux'

const Edit=(props)=>{
    const{id,email,username,password,role,academyId,name,website,handleToggle}=props

    const dispatch=useDispatch()


    const formSubmission=(formData)=>{
        // console.log("EditformData",formData)
        dispatch(startEditInfo(formData,handleToggle))
    }

    return(
        <div  className="col-md-6 col-md-offset-2">
            <h2>Update  profile</h2>
            <RegisterFormData  formSubmission={formSubmission}  
                               id={id} 
                               email={email} 
                               username={username}
                               password={password} 
                               name={name} 
                               website={website}
                               handleToggle={handleToggle}/> 
                                   
        </div>
    )
}
export default Edit