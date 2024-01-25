import { MdKeyboardArrowDown } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const Checkout = () => {
    return (
        <div className='z-10'>
          <div className="rounded-20 border-1 border-[#E3E3E3] mb-2 mt-10 p-6 mx-auto     h-[620px]">
            <h1 className="text-black text-lg font-bold">$25 per night</h1>
            <div className="flex border-1 mt-4 bg-[#FFF] border-[#DFDFDF] w-full    h-[79px] rounded-[15px]">
              <div className="p-4">
                <h1 className="text-black text-base font-medium">Check-in</h1>
                <h1 className="text-lg font-normal text-[#3C3C43]">
                  03 June 2023
                </h1>
              </div>

              <div className="border-l-1 p-4      ">
                <h1 className="text-black text-base font-medium">Check-out</h1>
                <h1 className="text-lg font-normal text-[#3C3C43]">
                  06 June 2023
                </h1>
              </div>
            </div>
            <div className="flex justify-between border-1 mt-4 bg-[#FFF] border-[#DFDFDF] w-full    h-[79px] rounded-[15px]">
              <div className="p-4      ">
                <h1 className="text-black text-base font-medium">Check-in</h1>
                <h1 className="text-lg font-normal text-[#3C3C43]">
                  03 June 2023
                </h1>
              </div>

              <div className=" p-4  flex  items-center ">
                <MdKeyboardArrowDown className="w-6 h-6 text-[#1B1B1E] " />
              </div>
            </div>
            <div className="flex justify-between border-1 mt-4 bg-[#FFF] border-[#DFDFDF] w-full    h-[79px] rounded-[15px]">
              <div className="p-4      ">
                <h1 className="text-black text-base font-medium">Check-in</h1>
                <h1 className="text-lg font-normal text-[#3C3C43]">
                  03 June 2023
                </h1>
              </div>
              <div className=" p-4  flex  items-center ">
                <GoPlus className="w-6 h-6 text-[#1B1B1E] " />
              </div>
            </div>
            <div className="flex  bg-[#F6F6F6] mt-8  w-full    h-[46px] rounded-[80px]">
              <div className="py-[5px] pl-1 flex gap-x-[13px]">
                <button className="w-[100px] md:w-[150px] h-[36px] rounded-[80px] border-1 bg-[#FFF] border-[#E1E1E1] shadow-shaDo">
                  Hotel only
                </button>
               <button className="text-base  text-[#8E8E92]  md:font-medium">Hotel + Experiences</button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6  w-full       ">
             <h1 className="text-[#1B1B1E] text-[35px] font-bold">$75</h1>
             <h1 className=" text-[#8E8E92] text-base font-normal">Tax will calculate in checkout</h1>
            </div>

            <button className="bg-gradient w-full     text-[#FFF] rounded-[100px] py-3 px-8 mt-6 text-center">Checkout Hotel</button>
         
         <h1 className="text-center mt-6 text-[#1B1B1E] text-base font-normal">Free Cancellation until 2023-06-03</h1>
          </div>   
        </div>
    );
};

export default Checkout;