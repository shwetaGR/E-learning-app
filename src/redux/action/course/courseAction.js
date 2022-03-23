import axios from 'axios'

// get all courses
export const startAllCourses=()=>{
    return (dispatch)=>{
        axios.get("https://dct-e-learning.herokuapp.com/api/courses",{
                                                      headers : {
                                              "Authorization":localStorage.getItem('token')
            }

        })
           .then((response)=>{
               const result=response.data 
               if(result.hasOwnProperty("errors")){
                   alert(result.errors)
               } else {
                   dispatch(getAllCourses(result))
               }          
            })
           .catch((err)=>{
               console.log(err.message)
           })
    }
}

 export const getAllCourses=(result)=>{
     return{
         type:"GET_ALL_COURSES",
         payload:result
     }
}

//post form data

export const startCourseFormData=(courseFormData)=>{
    return (dispatch)=>{
        axios.post("https://dct-e-learning.herokuapp.com/api/courses", courseFormData,
                                {
                                                      headers : {
                                              "Authorization":localStorage.getItem('token')
            }

        })
           .then((response)=>{
               const result=response.data 
               if(result.hasOwnProperty("errors")){
                //    alert(result.errors)
                console.log(result.errors)
               } else {
                   dispatch(setCourseFormData(result))
                   alert("successfully created course")
               }          
            })
           .catch((err)=>{
               console.log(err.message)
           })
    }
}

 export const setCourseFormData=(result)=>{
     return{
         type:"SET_COURSE_FORM_DATA",
         payload:result
     }
}

