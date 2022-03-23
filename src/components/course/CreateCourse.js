import React from 'react'
import CourseForm from './CourseForm'
import { startCourseFormData } from '../../redux/action/course/courseAction'
import {useDispatch} from 'react-redux'

const CreateCourse=(props)=>{

    const dispatch=useDispatch()

    const formSubmission=(courseFormData)=>{
        console.log("formSubmission",courseFormData)
        dispatch(startCourseFormData(courseFormData))
        props.history.push("/students")
    }
    return(
        <div className="row mt-4">
        <div className="col-md-6 col-md-offset-2">
            <h2>Course Form</h2>
            <CourseForm formSubmission={formSubmission}/>
        </div>
        </div>
    )
}
export default CreateCourse