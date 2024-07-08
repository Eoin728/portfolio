import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

 
const Project = props =>{
  return (
    <div>

<Stack
  direction="row"
  justifyContent="center"
>

  <Paper style = {{display:'flex', flexDirection:'column', justifyContent:'space-between', width:'40%', borderRadius:25,  backgroundColor: '#6E260E'}} square= {false} elevation={32}>
      <CardContent>
        <Typography gutterBottom variant='h3' style = {{fontFamily: 'Ga Maamli' }} component="div">
          {props.title}
        </Typography>
        <Typography style = {{flex: 1,fontFamily: 'Kode Mono'  }} variant="body1"color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style = {{ backgroundColor: '#005387' }}size="large" variant = 'contained'>   
          <Typography  style = {{fontFamily: 'Kode Mono' }} >
          view code</Typography>


        </Button>
        <Button  style = {{ backgroundColor: '#005387' }} size="large"   variant = 'contained'>
          
          <Typography  style = {{fontFamily: 'Kode Mono' }} >
          maybe something else dont really need
          </Typography>
          
          </Button>
      </CardActions>
    </Paper>
      <img  src = {props.image} width = '30%' ></img>
    </Stack>

     </div>
   )
 }




export default Project

