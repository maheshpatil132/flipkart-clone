import { Checkbox,  FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

const OrderSidebar = () => {
  return (
    <div className=' bg-white w-64 h-fit'>
        <div className='p-3 border-b'>
            <h1 className=' text-xl font-semibold'>Filters</h1>
        </div>
        <div className='p-3'>
            <h1 className=' font-semibold uppercase text-sm'>Order Status</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox/>} label='On the way' />
                <FormControlLabel control={<Checkbox/>} label='On the way' />
                <FormControlLabel control={<Checkbox/>} label='On the way' />
                <FormControlLabel control={<Checkbox/>} label='On the way' />
            </FormGroup>
        </div>
        <div className='p-3'>
            <h1 className=' font-semibold uppercase text-sm'>Order Time</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox/>} label='Last 30 days' />
                <FormControlLabel control={<Checkbox/>} label='2022' />
                <FormControlLabel control={<Checkbox/>} label='2021' />
                <FormControlLabel control={<Checkbox/>} label='older' />
            </FormGroup>
        </div>
    </div>
  )
}

export default OrderSidebar