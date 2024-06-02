// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function LearnerIdbyProfileId() {

//   const [sessionLearnerId] = useState(sessionStorage.getItem('UserSessionID'));

//   // const LearnerId = 'b9be1fa8-f60d-4b5a-8e80-cde05d0004ff';

//   console.log("sessionLearnerId", sessionLearnerId);  

//   const [data, setdata] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5199/api/Registration/GetProfileId/${sessionLearnerId}`)

//       .then(response => {
//         setdata(response.data); // Corrected this line

//         console.log("show me the data", data);
//         sessionStorage.setItem('ProfileId', data);

//       })
//       .catch(error => {
//         console.error('Error fetching data: ', error);
//       });
//   }, [data]);


// }

// export default LearnerIdbyProfileId;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LearnerIdbyProfileId() {
  const sessionLearnerId = sessionStorage.getItem('UserSessionID');
  // const [data, setData] = useState();
    // Only make the API call if sessionLearnerId is not null
    if (sessionLearnerId) {
      axios.get(`http://localhost:5199/api/Registration/GetProfileId/${sessionLearnerId}`)
        .then(response => {
          // Use the response to set data
          // Now you can use the data to set the sessionStorage
          sessionStorage.setItem('ProfileId', response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });// Depend on sessionLearnerId instead of data

  // If you need to display the data or use it in the render, you can do so here

  return (
    <div>
      {/* Render your component UI here */}
    </div>
  );
}

}