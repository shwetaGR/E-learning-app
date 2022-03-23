import axios from 'axios'

export const startStudentRegister=(studentFormData)=>{
    return (dispatch)=>{
        axios.post("https://dct-e-learning.herokuapp.com/api/admin/students", studentFormData,
        {
                                                                      headers : {
                                           "Authorization":localStorage.getItem('token')
        }
    })
        .then((response)=>{
            const result=response.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            }else{
                
                dispatch(setStudentFormData(result))
                alert("successfully register student ")
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const setStudentFormData=(result)=>{
    return{
        type:"SET_STUDENT_FORM_DATA",
        payload:result
    }
}

//login
export const startStudentLoginData=(loginData)=>{
    return (dispatch)=>{
        axios.post("https://dct-e-learning.herokuapp.com/api/students/login", loginData)
           .then((response)=>{
               const result=response.data  //token
               if(result.hasOwnProperty("errors")){
                   alert(result.errors)
               } else {
                   dispatch(setStudentLoginData(result))
                   alert("successfully logged in student")
                   localStorage.setItem("token",result.token)
               }          
            })
           .catch((err)=>{
               console.log(err.message)
           })
    }
}

 export const setStudentLoginData=(result)=>{
     return{
         type:"SET_STUDENT_LOGIN_DATA",
         payload:result
     }
 }
  //student all details
 export const startAllStudentInfo=()=>{
    return (dispatch)=>{
        axios.get(`https://dct-e-learning.herokuapp.com/api/admin/students`,{
                                                      headers : {
                                              "Authorization":localStorage.getItem('token')
            }

        })
           .then((response)=>{
               const result=response.data //info
               if(result.hasOwnProperty("errors")){
                   alert(result.errors)
               } else {
                   dispatch(setAllStudentInfo(result))
               }          
            })
           .catch((err)=>{
               console.log(err.message)
           })
    }
}

 export const setAllStudentInfo=(result)=>{
     return{
         type:"SET_ALL_STUDENT_INFO",
         payload:result
     }
}

// perticular student details
 export const startStudentInfo=(id)=>{
    return (dispatch)=>{
        axios.get(`https://dct-e-learning.herokuapp.com/api/students/${id}`,{
                                                      headers : {
                                              "Authorization":localStorage.getItem('token')
            }

        })
           .then((response)=>{
               const result=response.data //info
               if(result.hasOwnProperty("errors")){
                   alert(result.errors)
               } else {
                   dispatch(setSingleStudentInfo(result))
               }          
            })
           .catch((err)=>{
               console.log(err.message)
           })
    }
}

 export const setSingleStudentInfo=(result)=>{
     return{
         type:"SET_SINGLE_STUDENT_INFO",
         payload:result
     }
}
//edit student
export const startEditStudent=(studentFormData,id)=>{
    return(dispatch)=>{
        axios.put(`https://dct-e-learning.herokuapp.com/api/students/${id}`, studentFormData,
                                  {
                                                       headers : {
                                                 "Authorization":localStorage.getItem('token')
         }
         })
         .then((response)=>{
             const result=response.data
            //  console.log(result,"editResult")
             dispatch(setEditStudentForm(result))
         })
         .catch((err)=>{
             alert(err.message)
         })
    }
}
export const setEditStudentForm=(result)=>{
    return{
        type:'SET_EDIT_STUDENT_FORM',
        payload:result
    }
}

export const startRemoveStudent=(id)=>{
    return (dispatch)=>{
        axios.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${id}`,{
                                                      headers : {
                                              "Authorization":localStorage.getItem('token')
            }

        })
           .then((response)=>{
               const result=response.data //info
            //    console.log(result,"removeStudentAction")
               if(result.hasOwnProperty("errors")){
                   alert(result.errors)
               } else {
                   dispatch(RemoveStudent(result))
                   alert("successfully removed student")
                   localStorage.removeItem(result.token)
               }          
            })
           .catch((err)=>{
               console.log(err.message)
           })
    }
}

 export const RemoveStudent=(result)=>{
     return{
         type:"REMOVE_STUDENT",
         payload:result
     }
}