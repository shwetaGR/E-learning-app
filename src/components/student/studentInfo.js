import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { startStudentInfo } from '../../redux/action/student/studentAction'


const StudentInfo=(props)=>{
    const {id}=props.match.params

const dispatch=useDispatch()

useEffect(()=>{
    dispatch(startStudentInfo(id))
},[])

    const studentStore=useSelector((state)=>{
        return state.studentStore
    })
    console.log("perticular student info",studentStore)
    return(
        <div>
                 {studentStore.map((ele,i)=>{
                     return (
                     <div key={i}>
                     <p>Name - <b>{ele.name}</b></p>
                     <p>Email - <b>{ele.email}</b></p>
                     <p>Course - <b>{ele.courses.length}</b></p>
                     <p>Role - <b>{ele.role}</b></p>
                         </div>)
                 })}
                 <hr/>
                 <Link to="/" >Back</Link>
             
        </div>
    )
}
export default StudentInfo