import { Checkbox,  FormControlLabel, FormGroup } from '@mui/material'
import React, {  useCallback, useEffect, useState } from 'react'

const OrderSidebar = ({ orderlist , setOrderlist , orders}) => {

    const [selectedValue, setSelectedValue] = useState(null);

    const handleCheckboxChange = (value) => {

        setSelectedValue(value === selectedValue ? null : value);
        console.log(selectedValue);
        
    };
    
    const checkboxes = [
        { id: 1, label: 'processing' },
        { id: 2, label: 'delivered' },
        { id: 3, label: 'Canceled' },
        // Add more checkboxes as needed
    ];
    
    
    
    useEffect(()=>{
        if (selectedValue) {
            const filteredOrders = orders.filter(elem => elem.orderstatus === checkboxes[selectedValue - 1].label);
            setOrderlist(filteredOrders);
            console.log(orderlist);
        } else {
            setOrderlist(orders);
        }
    },[selectedValue])

      

  return (
    <div className=' bg-white w-64 h-fit sticky top-24'>
        <div className='p-3 border-b'>
            <h1 className=' text-xl font-semibold'>Filters</h1>
        </div>
        <div className='p-3'>
            <h1 className=' font-semibold uppercase text-sm'>Order Status</h1>
            <FormGroup>
            {checkboxes.map((checkbox , index) => (
                    <FormControlLabel 
                    key={index}
                    checked={selectedValue === checkbox.id} 
                    onChange={() => handleCheckboxChange(checkbox.id)} 
                    control={<Checkbox/>} 
                    label={checkbox.label} 
                    />
                ))}
            </FormGroup>
        
    
        </div>
        {/* <div className='p-3'>
            <h1 className=' font-semibold uppercase text-sm'>Order Time</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox/>} label='Last 30 days' />
                <FormControlLabel control={<Checkbox/>} label='2022' />
                <FormControlLabel control={<Checkbox/>} label='2021' />
                <FormControlLabel control={<Checkbox/>} label='older' />
            </FormGroup>
        </div> */}
    </div>
  )
}

export default OrderSidebar