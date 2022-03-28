import React from 'react'
import {Box , Typography} from "@mui/material";

const Header = ({title}) => {
  return (
    <Box sx={{width:'100%', height: '100px' , backgroundColor: '#3c40c7', textAlign:'center', borderRadius: '5px'}}>
          <Typography sx={{paddingTop: '20px' , fontSize: '2.3rem', cursor:'default'}} variant='h3'>{title} list of to-do's</Typography> 
    </Box>
  )
}

export default Header