import React from 'react'
import { RxCaretDown } from "react-icons/rx";

function Footer() {
  return (
    <div className='w-full h-[auto] bg-black text-white text-sm '>
      {/* FIRST COLUMN */}
        <div className='p-4 text-center'>
            <img className='w-[150px] sm:w-[250px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGH16LjIiEHJtCwuaT7YcGVDy2P8MsdNghQ&usqp=CAU' />
            <button className='text-white font-bold sm:text-md border rounded-full w-[140px] h-[60px]'>ENGLISH <RxCaretDown className='inline-block items-center' size={30}/></button>
            <p className='p-4'>
              Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Stax, Ledger Nano S, Ledger Vault, Bolos are registered trademarks of Ledger SAS
              <br/>
              <br/>
              1 rue du Mail, 75002 Paris, France
              <br/>
              <br/>
              Payment methods:
              <br/>
              <div className='pl-9 py-8 grid grid-cols-4 gap-9 items-center'>
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/logo-paypal-s.png?v=2' />
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/logo-crypto-s.png?v=6' />
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/logo-bitpay-s.png?v=6' />
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/layer1.png?v=2' />
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/logo-maestro-s.png?v=2' />
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/logo-mastercard-s.png?v=2' />
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/logo-mastercard-s.png?v=2' />
              <img src='https://www.ledger.com/wp-content/uploads/2021/11/logo-cb-s.png?v=2' />
              </div>
            </p>      
        </div>
        {/* SECOND COLUMN */}
        {/* <div className='p-4 flex'>
          <ul>
            <li>Products</li>
            <ul>
              <li>Ledger Stax</li>
              <li>Ledger Nano X</li>
              <li>Ledger Nano S Plus</li>
              <li>Compare our devices</li>
              <li>Bundles</li>
              <li>Accessories</li>
              <li>All Products</li>
              <li>Downloads</li>
            </ul>
            
              <li>Crypto Assets</li>
            
            
          </ul>
        </div> */}
        {/* THIRD COLUMN */}
        {/* <div>
          <ul>
            <li>Products</li>
            <ul>
              <li>Ledger Stax</li>
              <li>Ledger Nano X</li>
              <li>Ledger Nano S Plus</li>
              <li>Compare our devices</li>
              <li>Bundles</li>
              <li>Accessories</li>
              <li>All Products</li>
              <li>Downloads</li>
            </ul>
          </ul>
        </div> */}
        {/* FOURTH COLUMN */}
        {/* <div>
          <ul>
            <li>Products</li>
            <ul>
              <li>Ledger Stax</li>
              <li>Ledger Nano X</li>
              <li>Ledger Nano S Plus</li>
              <li>Compare our devices</li>
              <li>Bundles</li>
              <li>Accessories</li>
              <li>All Products</li>
              <li>Downloads</li>
            </ul>
          </ul>
        </div> */}
    </div>
  )
}

export default Footer