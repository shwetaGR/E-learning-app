import React,{useEffect,useState} from 'react'

import { startAllStudentInfo,startRemoveStudent } from '../../redux/action/student/studentAction'
import {useSelector,useDispatch} from 'react-redux'
import SearchStudent from './SearchStudent'
import StudentTable from './StudentTable'


const StudentListContainer=(props)=>{
    const {handleToggle}=props
    
    const [term,setTerm]=useState('')
    

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startAllStudentInfo())
    },[])

    const studentStore=useSelector((state)=>{
        return state.studentStore
    })
    console.log("studentStore",studentStore)


const handleTermChange=(e)=>{
    setTerm(e.target.value)
    // console.log(e.target.value,"search")
}

    const filteredStudent=()=>{
            const result=studentStore.filter((ele)=>{
                return (ele.name.toLowerCase().includes(term.toLowerCase()) ||
                ele.email.toLowerCase().includes(term.toLowerCase())
                )
            })
            return (result)
        }


    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('Are you sure that you wanted to delete that student record?')
            if(confirmRemove){
                console.log("remove id", id)
                dispatch(startRemoveStudent(id))
                // setTimeout(()=> history.push("/student"),500)
                // if(handleToggle){
                //     handleToggle()
                // }
            }
        }
    return(
        <div >
            {studentStore.length===0?(
                <div>
                <p>No student found</p>
                <p>Add first student</p>
                </div>
            ):(
                <div>
                    <h2>Total Students - {filteredStudent().length}</h2> {/* update length so usestudentStore replace  filteredStudent*/ }
                    <SearchStudent term={term} handleTermChange={handleTermChange}/>
                    <StudentTable handleRemove={handleRemove} 
                                  filteredStudent={filteredStudent()}/>
                      
              </div>
            )}

        </div>
    )
}
export default StudentListContainer 