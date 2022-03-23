import React,{useState,useEffect} from 'react'
import {startAdminInfo} from "../../redux/action/admin/adminAction"
import {useSelector,useDispatch} from 'react-redux'
import Edit from './Edit'

import StudentInfo from '../student/studentInfo'


const Account=(props)=>{
    const[toggle,setToggle]=useState(false)
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startAdminInfo())
    },[])


    const adminStore=useSelector((state)=>{
        return state.adminStore
    })
    console.log(adminStore,"adminStore account")

    const handleToggle=()=>{
        setToggle(!toggle)
    }
    

return(
        <div>
            {toggle?(
                <div>
                    <Edit  id={adminStore.id} 
                           username={adminStore.username}
                           email={adminStore.email}
                           password={adminStore.password}
                           role={adminStore.role}
                           academyId={adminStore.academy.academyId}
                           name={adminStore.academy.name}
                           website={adminStore.academy.website}
                           handleToggle={handleToggle}
                    />
                    <br/>
                    <button className=" btn-outline-primary" onClick={handleToggle}>Cancel</button>
                    </div>
                    ):(
                      <div>
                         <br/>
                          
                         <p>Username - <b>{adminStore.username}</b></p>
                         <p>Email - <b>{adminStore.email}</b></p>
                         <p>Role - <b>{adminStore.role}</b></p>
                         <p>Academy name - <b>{adminStore.academy&&adminStore.academy.name}</b></p>
                         <p>Website - <b>{adminStore.academy && adminStore.academy.website}</b></p>
                   <br/>
                       <button onClick={handleToggle} className="btn btn-outline-primary">Update</button>
                    </div>
                    )
            }
    </div>
    )
}
export default Account
