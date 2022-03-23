import React from 'react'
import {Link, Route,withRouter} from 'react-router-dom'
import Home from './Home'
import AdminRegister from './AdminRegister'
import Login from './Login'
import Account from "./Account"
import StudentNavBar from "../student/StudentNavBar"
import CourseNavBar from '../course/CourseNavBar'


const NavBar=(props)=>{
  const {userLoggedIn,handleAuth}=props  

    return(
        
         <div >
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'SkyBlue'}}>
                {/*navbar navbar-expand-lg navbar-light bg-light,navbar-dark bg-primary*/}
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Learn Academy</a>
            {userLoggedIn ?(
                     <div >
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/account">My Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/students">Students</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/courses">My Courses</a>
          {/* <i class="bi bi-person">account</i> */}
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"onClick={()=>{
                            localStorage.removeItem("token")
                            alert("successfully Logout ")
                            handleAuth()
                            props.history.push("/")
                        }}
                            >Log out</a>
        </li>

        </ul>
                </div>          
            ):(
                <div > 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
                    </ul>
                </div>
              ) 
            }
            </div>
              </nav>
            
            <Route path="/" component={Home}  exact={true}/>
            <Route path="/register" component={AdminRegister}/>
            <Route path="/login" render={(props)=>{
                              return <Login {...props}
                                   handleAuth={handleAuth}
                                />
                           }}/>
            <Route path="/account" component={Account} exact={true}/>
           <Route path="/students" component={StudentNavBar} />
           <Route path="/courses" component={CourseNavBar}/>
        </div>
    )
}
const wrappedComponent=withRouter(NavBar)
export default wrappedComponent