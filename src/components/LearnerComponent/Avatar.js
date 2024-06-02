import React from 'react'
import Avatar from '@mui/material/Avatar';


function Avatar() {

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
         
        };
      }

 
    return (
   <>
   
          <Avatar {...stringAvatar('Priyadharshini Murugan')}    // print name
                  sx={{ cursor: 'pointer' }}
                  onMouseEnter={handleMenuOpen}
                />
   </> 
  )
}

export default Avatar