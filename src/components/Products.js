import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function Products() {
  return (
    <div className="bg-[#1C1D20] w-full h-[auto] text-white p-7">
      <h2 className="text-2xl sm:text-5xl text-center p-7">
        FIND YOUR PERFECT <br />
        LEDGER WALLET
      </h2>

      {/* FIRST PRODUCT */}
      <div className="sm:flex justify-center w-[100%]">
        <div className="justify-center  sm:w-[500px] border-r text-center flex flex-col items-center ">
          <img
            className=" w-[200px] sm:w-[350px]"
            src="https://www.ledger.com/wp-content/uploads/2023/04/Stax-new-1.5.png"
          />
          <h3 className="text-2xl sm:text-3xl pt-8">Ledger Nano X</h3>
          <span className="pt-4 text-[#ff5300] text-sm">Coming soon</span>
          <p className="sm:w-[450px] p-2">
            Our most advanced and customizable Ledger yet, with a large E ink
            screen.
          </p>
        </div>

        {/* SECOND PRODUCT */}
        <div className="justify-center sm:w-[500px] border-r text-center flex flex-col items-center">
          <img
            className="w-[200px] sm:w-[350px]"
            src="https://www.ledger.com/wp-content/uploads/2023/04/LNX-new-1.5.png"
          />
          <h3 className="text-2xl sm:text-3xl pt-8">Ledger Stax</h3>
          <span className="p-3 flex justify-center gap-3 items-center text-sm">
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStarHalfAlt className="text-[#ff5300]" size={13} />
            4.5/5 - 11 108 Reviews
          </span>
          <p className="sm:w-[450px] p-2">
            Secure and manage your crypto & NFTs on-the-go with our
            Bluetooth®-enabled crypto wallet.
          </p>
        </div>

        {/* THIRD PRODUCT */}
        <div className="justify-center  sm:w-[500px] text-center flex flex-col items-center">
          <img
            className="w-[250px] sm:w-[350px]"
            src="https://www.ledger.com/wp-content/uploads/2023/04/LNSP-new-1.5.png"
          />
          <h3 className="text-2xl sm:text-3xl pt-8">Ledger Stax</h3>
          <span className="p-3 flex justify-center gap-3 items-center text-sm">
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStar className="text-[#ff5300]" size={13} />
            <FaStarHalfAlt className="text-[#ff5300]" size={13} />
            4.5/5 - 1 213 Reviews
          </span>
          <p className="sm:w-[450px] p-2">
            The perfect entry-level crypto wallet to securely manage all your
            crypto and NFTs.
          </p>
        </div>
      </div>
      <div className="text-center p-9 items-center">
        <h2 className="text-3xl p-5">
          Need help choosing the right device for your needs?
        </h2>
        <p className="text-md">
          Discover the characteristics, specific features and uses associated
          with our two products and select the one that best meets your
          expectations.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="border rounded-full bg-[#ff5300] p-6">
          Compare our devices
          <BsArrowRight className="inline-block pl-2 " size={25} />
        </button>
      </div>
    </div>
  );
}

export default Products;
