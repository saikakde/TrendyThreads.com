import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid className='text-left'container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Ram</p>
                        <p className='opacity-70'>April 5,2023</p>
                    </div>
                </div>
                <Rating value={4.5} precision={.5} readOnly name='half-rating'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate ad perferendis illum debitis non, dolores aut aspernatur est! </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard