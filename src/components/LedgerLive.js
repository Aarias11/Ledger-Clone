import React from "react";
import { BsArrowRight } from "react-icons/bs";

function LedgerLive() {
  return (
    <div className="w-full h-min-[750px] flex flex-col sm:flex-row sm:h-[800px]">
      {/* LEFT SIDE IMAGE DIV */}
      <div className=" sm:w-[40%] flex justify-center items-center pt-5">
        <img
          className="w-[200px] sm: p-3 h-[40%] sm:w-[auto] sm:h-[500px]  pt-9"
          src="https://www.ledger.com/wp-content/uploads/2022/04/Buy-1.png"
        />
      </div>


      {/* RIGHT SIDE DIV */}
      <div className="lg:w-[60%] items-center h-auto p-9 flex-col flex-wrap">
        <p className="text-center sm:text-md pt-9 w-full">Ledger Live</p>
        <h3 className="px-5 w-[60%] text-center font-bold text-xl sm:text-4xl w-full pt-9">
          THE CRYPTO APP FOR SELF-CUSTODIANS
        </h3>


        {/* BUY CRYPTO SECTION */}
        <div className=" w-full h-auto flex flex-wrap pt-5 div-links">
          <div className=" py-2 text-center">
            <h6 className="font-bold text-lg text-center sm:text-2xl">Buy Crypto</h6>
            <p className="text-sm text-center sm:w-[350px] pt-3">
              Buy Bitcoin, Ethereum, and more cryptocurrencies using
              credit/debit card or bank transfer.
            </p>
            <br />
            <span className="font-bold underline ">
              Start buying crypto
              <BsArrowRight className="inline-block pl-1" size={20} />
            </span>
          </div>


          {/* SWAP CRYPTO SECTION */}
          <div className="py-2 text-center h-auto opacity-40 hover:opacity-100 cursor-pointer">
            <h6 className="font-bold text-lg text-center sm:text-2xl">Swap Crypto</h6>
            <p className="text-sm text-center sm:w-[350px] pt-3">
              Exchange one cryptocurrency for another, quickly and securely with
              our providers.
            </p>
            <br />
            <span className="font-bold underline ">
              Swap Crypto
              <BsArrowRight className="inline-block pl-1" size={20} />
            </span>
          </div>
        </div>


        {/* STAKE CRYPTO SECTION */}
        <div className=" w-full h-auto flex flex-wrap pt-5 ">
          <div className="py-2 text-center h-auto opacity-40 hover:opacity-100 cursor-pointer">
            <h6 className="font-bold text-lg text-center pt-4 sm:text-2xl">Stake Crypto</h6>
            <p className="text-sm text-center sm:w-[350px] pt-4">
              Earn rewards by staking your Ethereum, Solana, Cosmos and mor
              through Ledger Live and passively grow your assets.
            </p>
            <br />
            <span className="font-bold underline ">
              Stake crypto now
              <BsArrowRight className=" inline-block pl-1" size={20} />
            </span>
          </div>

          
          {/* MANAGE CRYPTO SECTION */}
          <div className="py-2 text-center opacity-40 hover:opacity-100 cursor-pointer">
            <h6 className="font-bold text-lg text-center pt-4 sm:text-2xl">Manage Crypto</h6>
            <p className="text-sm text-center sm:w-[350px] pt-3">
              Securely send and receive more than 500+ cryptocurrencies
              including Bitcoin, Ethereum, XRP, Cardano, and Polygon.
            </p>
            <br />
            <span className="font-bold underline ">
              See crypto supported
              <BsArrowRight className="inline-block pl-1" size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LedgerLive;
