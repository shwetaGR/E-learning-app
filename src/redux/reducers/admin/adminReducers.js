const adminInitialValue={}

const adminReducers=(state=adminInitialValue,action)=>{
    switch(action.type){
         case "FORM_DATA" :{
             return  {...action.payload}
         }
         case "LOGIN_DATA" :{
             return  {...action.payload}
        }
        case 'SET_ADMIN_INFO' :{
          return  {...action.payload}
        }
        case 'SET_EDIT_FORM_DATA' : {
          return  {...action.payload}
        }
         default : {
             return {...state}
         }
    }
}
export default adminReducers

