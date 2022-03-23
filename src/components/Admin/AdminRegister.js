import React from 'react'
import {startRegisterForm} from "../../redux/action/admin/adminAction"
import {useDispatch} from 'react-redux'
import RegisterFormData from './RegisterFormData' 


const AdminRegister=(props)=>{

    const dispatch=useDispatch()

    const formSubmission=(formData)=>{
        console.log("formData",formData)
        dispatch(startRegisterForm(formData))
        props.history.push("/login")
    }
    return(
        <div className="row mt-4">
            <div className="col-md-6 col-md-offset-2">
            <h3 >Create Academy Account</h3>
            <RegisterFormData formSubmission={formSubmission}/>
            </div>
        </div>
        
    )
}
export default AdminRegister