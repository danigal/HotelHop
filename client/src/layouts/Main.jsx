import { Box } from '@mui/system'
import Navbar from 'components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <Box width= "100%" height= "100%">
      <Box>
        <Navbar />
        <Outlet /> {/* It represents all components that are underneath (HomePage) */}
      </Box>
    </Box>
  )
}

export default Main