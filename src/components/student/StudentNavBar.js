import React,{useState} from 'react'
import {Link,Route} from 'react-router-dom'
import StudentRegister from './StudentRegister'
import StudentListContainer from './StudentListContainer'
import StudentInfo from './studentInfo'
import EditStudent from './EditStudent'


const StudentNavBar=(props)=>{
const [toggle,setToggle]=useState(false)

const handleToggle=()=>{
    setToggle(!toggle)
}


    return(
        <div>
            <div className="col-md-12 my-5 ">
                <Link to="/students/register" className="btn btn-outline-dark">Add Student</Link>
            </div>
            {/* <Link to="/students">students</Link> */}
        
           <Route path="/students/register"  render={(props)=>{
               return <StudentRegister {...props} handleToggle={handleToggle} 
               /> }} exact={true}/>
           
           <Route path="/students" render={(props)=>{
               return <StudentListContainer {...props} handleToggle={handleToggle} 
               /> }}  exact={true}/>
           <Route path="/students/:id" component={StudentInfo} exact={true}/>
           <Route path="/students/:id" component={EditStudent} exact={true}/>
        </div>
    )
}
export default StudentNavBar