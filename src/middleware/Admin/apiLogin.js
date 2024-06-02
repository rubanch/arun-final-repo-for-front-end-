import { LOGIN_REQUEST, loginSuccessadmin, loginSuccessuser, loginError } from '../../actions/loginAction';
import axios from "axios";

import { baseUrl } from "../../middleware/api";

// import LearnerIdbyProfileId from '../LearnerMiddleware/LearnerIdbyProfileId';
import { useEffect } from 'react';
import LearnerIdbyProfileId from '../LearnerMiddleware/LearnerIdbyProfileId';
import { useNavigate } from 'react-router-dom';






// http://localhost:5199/api/Login/LoginLearner

const loginUser = ({ dispatch }) => (next) => async (action) => {

  if (action.type === LOGIN_REQUEST) {
    try {
      const response = await axios.post(`${baseUrl}/api/Login/LoginLearner`, action.payload);

      console.log('API Response:', response.data); // Log the response data

      if (response.data.email === true && response.data.password === true && response.data.role === "Admin") {
        console.log("Admin", response.data)
        const adminId = response.data.getLearnerId;
        // Store user ID in session
        sessionStorage.setItem('AdmminSessionId', adminId);
        dispatch(loginSuccessadmin(response.data));
      }
      else if (response.data.email === true && response.data.password === true && response.data.role === "Learner") {
        console.log("user", response.data)


        const learnerId = response.data.getLearnerId;
        // Store user ID in session
        sessionStorage.setItem('UserSessionID', learnerId);

        dispatch(loginSuccessuser(response.data))

        // useEffect(()=>{
        //   LearnerIdbyProfileId(); 
        // },[]);
        
        LearnerIdbyProfileId();


      }
      else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(loginError(error.message));
    }
  }
  return next(action)
};



export default loginUser;