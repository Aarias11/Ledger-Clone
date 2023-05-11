import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import ledger from '../components/ledger-icon.png'


const Home = () => {
  return (
    <div className='md:h-min-[900px] flex bg-black text-white  justify-center flex-wrap-reverse'>
        <div className=' p-9 md:p-10 w-[600px] h-min-[400px]  '>
            <h1 className='w-min-[100px] text-[#ff5300] sm:p-2 '>LEDGER HARDWARE WALLETS</h1>
            <h2 className=' text-3xl py-2 md:text-6xl w-max-[600px] w-min-[600px]'>BUY A LEDGER NANO, GET UP TO <span className='text-[#ff5300]'>$30 in BTC</span></h2>
            <p className=' py-2 text-lg s:w-[600px] w-min-[100px] h-min-[400px]'>Until April 18th, upgrade your crypto journey with a hardware wallet and we'll send crypto your way. Want Crypto? Get Ledger.</p>
            <ul className='py-2 w-min-[100px]'>
                <li className=' inline-flex items-center'><img className='w-[30px]' src={ledger}   />
                Buy a Ledger Nano X, get $30 in BTC
                </li>
                <li className=' inline-flex items-center'><img className='w-[30px]' src={ledger}   />
                Buy a Ledger Nano S Plus, get $20 in BTC
                </li>
            </ul>
            <button className='w-[150px] w-min-[430px] h-[50px] rounded-full p-2 bg-[#ff5300] '>Shop Now<BsArrowRight className='inline-block pl-2' size={25} /></button>
            <span className='underline p-5'>Compare wallets</span><BsArrowRight className='inline-block pl-2' size={25} />
            <span className='w-min-[430px] flex gap-3 w-[400px] h-[45px] p-3 my-8 rounded-lg bg-[#191919]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                Trusted by 6 million Customers
                </span>
        </div>
        <div className='home-pic s:w-full md:w-[500px]'>
            {/* <img className='' src='https://www.ledger.com/wp-content/uploads/2023/03/april_ledgernanos_nanox.jpg' /> */}
        </div>
    </div>
  )
}

export default Home