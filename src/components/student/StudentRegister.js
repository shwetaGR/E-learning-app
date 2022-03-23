import React from 'react'
import StudentForm from './StudentForm'
import { startStudentRegister } from '../../redux/action/student/studentAction'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const StudentRegister=(props)=>{
    const{handleToggle}=props
    const dispatch=useDispatch()


    const formSubmission=(studentFormData)=>{
        console.log("add student",studentFormData)
        dispatch(startStudentRegister(studentFormData))
        props.history.push("/students")
    }

    return(
        <div  className="row mt-4">
        <div className="col-md-6 col-md-offset-2">
            <h3 >Student Registeration</h3>
            <StudentForm formSubmission={formSubmission} handleToggle={handleToggle}/><hr/>
            <Link to="/students" >Back</Link>
        </div>
        </div>  
    )
}
export default StudentRegister