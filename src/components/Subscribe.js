import React from 'react'
import { FaReddit, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok} from "react-icons/fa";

function Subscribe() {
  return (
    <div className='w-full h-[auto] bg-[#D4A0FF] sm:flex '>
        <div className=' p-5 w-full sm:w-[50%] h-auto'>
            <h3 className='text-3xl font-bold p-5 text-center'>Stay in touch</h3>
            <p className='p-5'>Announcements can be found in our blog. Press contact:
media@ledger.com</p>
            <ul className='w-max-[400px] flex justify-center gap-4 p-5'>
                <li><FaReddit className='bg-white rounded-full'  size={50} /></li>
                <li><FaFacebook className='bg-white rounded-full'  size={50} /></li>
                <li><FaInstagram className=' rounded-full'  size={50} /></li>
                <li><FaTwitter className=' rounded-full'  size={50} /></li>
                <li><FaYoutube className=' rounded-full'  size={50} /></li>
                <li><FaLinkedin className=' rounded-full'  size={50} /></li>
                <li><FaTiktok className=' rounded-full'  size={50} /></li>
            </ul>
        </div>
        <div className='p-5 w-full sm:w-[50%] h-auto'>   
            <h3 className='text-3xl font-bold p-5 text-center'>Subscribe to our
newsletter</h3>
            <p className='p-5'>New coins supported, blog updates and exclusive offers directly in your inbox</p>
            <div className='p-2 flex justify-center gap-2  '>
                <input className='sm:w-max-[400px] subscribe border rounded-full p-6 text-black bg-transparent' placeholder='Enter your email' />
                <button className='text-white p-3 sm:p-6 border rounded-full bg-black'>Register to newsletter</button>
            </div>
        </div>

    </div>
  )
}

export default Subscribe