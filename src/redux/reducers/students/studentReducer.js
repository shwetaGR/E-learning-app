const studentInitialValue=[]

const studentReducer=(state=studentInitialValue,action)=>{
    switch(action.type){
         case "SET_STUDENT_FORM_DATA" :{
           return  [...state,{...action.payload}]
         }
         case "SET_STUDENT_LOGIN_DATA" :{
                     return  [...state,{...action.payload}]
                   }
         case "SET_ALL_STUDENT_INFO" :{
                    return  [...action.payload]    
                  }
         case "SET_SINGLE_STUDENT_INFO" :{
                    return  [action.payload]
                  }
         case 'SET_EDIT_STUDENT_FORM' : {
                    return  state.map((ele)=>{
                      if(ele._id===action.payload){
                        return {...ele,...action.payload}
                      }else{
                        return {...ele}
                      }
                    })
                  }
         case "REMOVE_STUDENT" :{
                    return  state.filter((ele)=>{
                      return ele.id!==action.payload
                    })
                  }
         default : {
            return [...state]
         }
    }
}
export default studentReducer

