import { PUT_USER_PROFILE_FAILURE,PUT_USER_PROFILE_REQUEST,PUT_USER_PROFILE_SUCCESS } from "../../actions/LearnerAction/UpdateUserProfileAction"
 
const initialstate ={
    Credential :[],
    loading :false,
    error:null
}
 
 
 
 
 
    const UpdateUserProfileReducer = (state = initialstate, action)=>{
     console.log('Received action:', action); // Add this line to log the action
     switch (action.type)
    {
        case PUT_USER_PROFILE_REQUEST:
            return{
                ...state,
                loading: true
            }
 
        case PUT_USER_PROFILE_SUCCESS:
           
            return{
                ...state,
                loading:false,
               
            }
           
 
        case  PUT_USER_PROFILE_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload,
 
            }
            default:
                return state;
    }
 
}

 
export default  UpdateUserProfileReducer;
