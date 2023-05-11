import React from 'react'

function Recommended() {
  return (
    <div className='bg-[#1a1a1a] text-white text-center w-full h-max-[140px] p-9'>
        RECOMMENDED BY
        <div className='flex sm:flex justify-center items-center gap-9 p-6'>
            <img className='w-[70px] p-2 sm:w-[120px]' src='https://www.ledger.com/wp-content/uploads/2022/10/Forbes@2x.png'/>
            <img className='w-[160px] p-2' src='https://www.ledger.com/wp-content/uploads/2022/10/Techcrunch@2x.png' />
            <img className='w-[120px] p-2' src='https://www.ledger.com/wp-content/uploads/2022/10/Bloomberg@2x.png' />
        </div>
    </div>
    
  )
}

export default Recommended