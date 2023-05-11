import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function GetStarted() {
  return (
    <div className='w-full h-min-[800px] flex justify-center flex-wrap gap-6 p-9'>
        <div className='bg-[#F1F1F1] w-[650px] h-[750px] flex flex-col justify-center items-center p-9'>
            <img className='w-[300px] h-[300px]' src='https://www.ledger.com/wp-content/uploads/2021/11/homepage-get-started.png' />
            <p className='text-sm py-9'>NEW TO THE CRYPTO WORLD?</p>
            <p className='text-4xl'>Get started with our smart insider tips.</p>
            <span className='underline'>Get started with crypto<BsArrowRight className='inline-block pl-2' size={25} /></span>
        </div>
        <div className='bg-[#F1F1F1] w-[650px] h-[750px] flex flex-col justify-center items-center text-left p-9'>
            <img className='w-[300px] h-[300px]' src='https://www.ledger.com/wp-content/uploads/2021/11/homepage-academy-block.png' />
            <p className='text-sm py-9'>NEW TO THE CRYPTO WORLD?</p>
            <p className='text-4xl'>Get started with our smart insider tips.</p>

            <span className='underline'>Become a crypto expert<BsArrowRight className='inline-block pl-2' size={25} /></span>
            
        </div>
    </div>
  )
}

export default GetStarted