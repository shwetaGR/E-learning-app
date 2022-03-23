import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const StudentTable=(props)=>{
    const{handleRemove,filteredStudent}=props

    const studentStore=useSelector((state)=>{
        return state.studentStore
    })
    // console.log("student table Store",studentStore)


    return(
        <div className="row mt-3">
            <table className="table table-hover">
                          <thead>
                              <tr>
                                  <th >#</th>
                                  <th >Name</th>
                                  <th >Email</th>
                                  <th style={{textAlign:"center"}}>Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              {filteredStudent.map((ele,i)=>{
                                  return <tr key={ele._id}>
                                      <td >{i+1}</td>
                                      <td>{ele.name}</td>
                                      <td>{ele.email}</td>
                                      <td><Link to={`/students/${ele._id}`} >
                                          <button className="btn btn-outline-success">View</button>
                                          </Link>
                                         </td>
                                      <td><Link to={`/students/${ele._id}`} >
                                          <button className="btn btn-outline-info">Edit</button>
                                          </Link>
                                        </td>
                                   <td><button onClick={()=>{handleRemove(`${ele._id}`)}} className="btn btn-outline-danger" >remove</button></td> 
                                  </tr>
                              })}
                          </tbody>
                      </table>
        </div>
    )
}
export default StudentTable