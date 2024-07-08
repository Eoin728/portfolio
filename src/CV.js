import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CV = () =>{


  return (
    <div>
      
    <Stack 
    
  justifyContent="center"
    spacing={2} direction="row">
      <Button  style = {{ backgroundColor: '#B57E3F' }} variant="contained">
        
          <Typography  style = {{fontFamily: 'Kode Mono' }} >
        Look Cv</Typography>
        </Button>
      <Button  style = {{ backgroundColor: '#B57E3F' }} variant="contained">
        
          <Typography  style = {{fontFamily: 'Kode Mono' }} >
        IDK</Typography>
        </Button>
    </Stack>
     </div>
   )
 }




export default CV