import React,{useState,useEffect}from 'react'
import StudentForm from './StudentForm'
import { startEditStudent } from '../../redux/action/student/studentAction'
import{useSelector, useDispatch} from 'react-redux'

const EditStudent=(props)=>{
    // const[details,setDetails]=useState({})
    const {id}=props.match.params
    // const{id,name,email,password,isAllowed,handleToggle}=props

    const dispatch=useDispatch

    const studentStore=useSelector((state)=>{
        return state.studentStore
    })
    console.log(studentStore,"student Edit Store")

    const formSubmission=(studentFormData)=>{
        console.log("StudentEditformData",studentFormData)
        dispatch(startEditStudent(studentFormData,id))
    }
    /* useEffect(() => {
        if (studentStore.length > 0) {
            const find = studentStore.find(ele => ele._id === id)
            setDetails(find)
        }
    }, []) */
// console.log("details",details)


    return(
        <div className="col-md-6 col-md-offset-2">
            <h3>Update Student</h3>
            <StudentForm      formSubmission={formSubmission}
                              id={studentStore._id}
                              name={studentStore.name} 
                               email={studentStore.email} 
                               password={studentStore.password} 
                               isAllowed={studentStore.isAllowed}
                               />
        </div>
    )
}
export default EditStudent