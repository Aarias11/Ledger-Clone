import React from 'react'
import { BsArrowRight } from "react-icons/bs";


function TopBanner() {
  return (
    <div className='bg-[#1a1a1a] text-[#fff] text-sm p-2'>
      <p className='text-center'>
      Beware of phishing attacks, Ledger will never ask for the 24 words of your recovery phrase. Never share them. <span className='text-[#ff5300] underline'>Learn more</span><BsArrowRight className='text-[#ff5300] inline-block pl-1' size={20} />
      </p>
    </div>
  )
}

export default TopBanner