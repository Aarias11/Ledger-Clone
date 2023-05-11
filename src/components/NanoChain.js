import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function NanoChain() {
  return (
    <div className='bg-black w-full h-max-[500px] flex-wrap-reverse text-white flex justify-center  text-center   '>
        <div className=' md:w-[40%] h-min-[100%] flex flex-col justify-center '>
            <h3 className=' text-md p-5 w-auto  md:text-lg'>INTRODUCING THE LEDGER NANO X ONCHAIN</h3>
            <h2 className=' text-xl p-5 w-auto md:text-4xl'>PEACE OF MIND YOU CAN WEAR</h2>
            <p className=' text-2xl p-4  w-auto'>
            Secure your assets & wear them in style with the Ledger Nano X OnChain bundle.
            </p>
            <div className='h-[120px]'>
            <button className='w-min-[300px] h-auto but rounded-full bg-[#ff5300] p-5'>Check it out<BsArrowRight className='inline-block pl-2' size={25} /></button>
            </div>
        </div>
        <div className='w-full h-auto md:w-[40%]  onchain-pic '>
            <img className='min-[500px] sm:w-auto h-full' src='https://www.ledger.com/wp-content/uploads/2023/03/Onchain.png' />
        </div>
        
    </div>
  )
}

export default NanoChain