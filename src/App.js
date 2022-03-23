import React,{useState,useEffect} from 'react'
import NavBar from "./components/Admin/NavBar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

 const App=(props)=>{
  const[userLoggedIn,setUserLoggedIn]=useState(false)

  const handleAuth=()=>{
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

   return (
     
       <div className="container">
         <div  className="row mt-4 mb-3">
       <h1>Welcom to E-learning-app</h1>
       <div className="col-mb-2 mt-2">
       <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/> 
       </div>
       </div>
       </div> 
   )
 }
 export default App