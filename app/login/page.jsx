"use client";
import React, { useEffect } from 'react'
import Left from './Left';
import Right from './Right';
import toast from 'react-hot-toast';

const page = () => {

  useEffect(()=>{
    
    toast('Click any sign up option to visit next page', {
      icon: '👆',
    });
    toast('Hello', {
      icon: '😊',
    });

  },[])
  return (
    <div className='flex flex-row h-full'>
        <Left/>
        <Right/>
    </div>
    
  )
}

export default page;