"use client";
import React, { useEffect } from 'react'
import Left from './Left';
import Right from './Right';
import toast from 'react-hot-toast';

const page = () => {

  useEffect(()=>{
    
    setTimeout(()=>{
      toast('Click any sign up option to visit next page');
    },2000);

  },[])
  return (
    <div className='flex flex-row h-full'>
        <Left/>
        <Right/>
    </div>
    
  )
}

export default page;