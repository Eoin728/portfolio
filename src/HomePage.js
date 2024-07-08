import React from 'react'
import img from './placeholder.png'
import Project from './Project';
import Stack from '@mui/material/Stack';
import Head from './Head';
import CV from './CV';
import background from './backgroun2.jpg'
import { Typography } from '@mui/material';

const HomePage = () =>{
  const d1 = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  const d2 = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  const d3 = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  const d4 = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  const titles = ["T1","T2","T3","T4"]
  const descs = [d1,d2,d3,d4]
  const images= [img,img,img,img]
  return (
    <div
     style={{ backgroundImage: `url(${background})` }}
    >
    <Head/>
    <CV/>
    <Typography variant='h2' style = {{fontFamily: 'Ga Maamli' }} >Projects</Typography>
<Stack spacing={4}>
      <Project image ={images[0]} text = {descs[0]} title = {titles[0]}  link = 'none'/>
      <Project image ={images[1]} text = {descs[1]} title = {titles[1]}  link = 'none'/>
      <Project image ={images[2]} text = {descs[2]} title = {titles[2]}  link = 'none'/>
      <Project image ={images[3]} text = {descs[3]} title = {titles[3]}  link = 'none'/>
</Stack>
     </div>
   )
 }




export default HomePage