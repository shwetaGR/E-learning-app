import axios from "axios"

export  const startRegisterForm=(formData)=>{
    return (dispatch)=>{
      axios.post("https://dct-e-learning.herokuapp.com/api/admin/register", formData)
        .then((response)=>{
            const result=response.data
            // console.log(result)
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            }else{
                
                dispatch(setFormData(result))
                alert("successfully created  user account")
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const setFormData=(result)=>{
    return{
        type:"SET_FORM_DATA",
        payload:result
    }
}
//admin login

export const startLoginData=(loginData)=>{
    return (dispatch)=>{
        axios.post("https://dct-e-learning.herokuapp.com/api/admin/login", loginData)
           .then((response)=>{
               const result=response.data  //token
               if(result.hasOwnProperty("errors")){
                alert(result.message)
               } else {
                   dispatch(setLoginData(result))
                   alert("successfully logged in")

                   localStorage.setItem("token",result.token)
               }          
            })
           .catch((err)=>{
               alert(err.message)
           })
    }
}

 export const setLoginData=(result)=>{
     return{
         type:"SET_LOGIN_DATA",
         payload:result
     }
 }

//admin account

export const startAdminInfo=()=>{

    return (dispatch)=>{
      axios.get("https://dct-e-learning.herokuapp.com/api/admin/account", {
                                 headers : {
                                     "Authorization":localStorage.getItem('token')
                                 }
      })
      .then((response)=>{
          const result=response.data 
        //   console.log(result,"account")
          dispatch(setAdminInfo(result))
      })
      .catch((err)=>{
          alert(err.message)
      })
    }
}

export const setAdminInfo=(result)=>{
    return{
        type:'SET_ADMIN_INFO',
        payload:result
    }
}
       //admin Edit

export const startEditInfo=(formData)=>{
    return(dispatch)=>{
        axios.put("https://dct-e-learning.herokuapp.com/api/admin", formData,
                                  {
                                                       headers : {
                                                 "Authorization":localStorage.getItem('token')
         }
         })
         .then((response)=>{
             const result=response.data
             dispatch(setEditFormData(result))
         })
         .catch((err)=>{
             alert(err.message)
         })
    }
}
export const setEditFormData=(result)=>{
    return{
        type:'SET_EDIT_FORM_DATA',
        payload:result
    }
}