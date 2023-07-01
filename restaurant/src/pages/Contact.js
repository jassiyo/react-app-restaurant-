import React from 'react'
import Layout from '../components/layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Typography, Box, TableContainer, Paper, Table,
     TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:8, ml:5,mr:3 , "& h4": {fontWeight:'bold', mb:2 }}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
       piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
         
        </p>
      </Box>
      <Box sx={{m:4, fontSize:'4rem'}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'goldenrod'}} align='center'>
                  Contact Us 
                </TableCell>
              </TableRow>
            </TableHead>  
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{
                     color:'Red',
                     pt: 1,

                 }}/>
                  123456789 (Toll Free Number)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{
                     color:'blue',
                     pt: 1,
                 }}/>
                  Jassi141998@gmail.com 
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{
                     color:'Green',
                     pt: 1,
                 }}/>
                  Jassi141998@gmail.com 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}
export default Contact