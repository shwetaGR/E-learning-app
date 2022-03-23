import React,{useEffect} from 'react'
import { startAllCourses } from '../../redux/action/course/courseAction'
import {useSelector,useDispatch} from 'react-redux'

const CoursesList=(props)=>{

    const dispatch=useDispatch()

useEffect(()=>{
    dispatch(startAllCourses())
},[])

const courseStore=useSelector((state)=>{
    return state.courseStore
})

console.log(courseStore,"course list")
    return(
        <div>
            <h2>Total Courses - {courseStore.length}</h2>
        </div>
    )
}
export default CoursesList