import { Box } from '@mui/material'
import Feed from '../components/Feed'
import React from 'react'

const FeedContainer = () => {
  return (
    <Box  p={2} flex={4}>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>

    </Box>
    
  )
}

export default FeedContainer
