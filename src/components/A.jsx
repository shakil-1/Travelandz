import { MdKeyboardArrowDown, MdLocationPin ,MdGroup  } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import group from "../assets/icon/Group.svg";
import c1 from "../assets/c1.png";
const A = () => {
  return (
 <div className="mb-[180px]  ">
{/* 1 */}
  
      <div className="relative lg:w-[848px]   rounded-[20px]  bg-[#F1F1F1] mt-6">
        <input
          type="checkbox"
          className="absolute peer opacity-0"
          name=""
          id="input1"
        />
        <label
          className="font-bold  tracking-[1px] mx-[20px] h-[72px] flex items-center text-lg text-[#1B1B1E]"
          htmlFor="input1"
        >
         Day 1
        </label>
        <h3 className="absolute top-[25px] left-[100px] text-base font-normal text-[#8E8E92]">
          03 June 2023
        </h3>
        <div className="absolute top-[31px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200">
          <MdKeyboardArrowDown className="w-6 h-6" />
        </div>
        <div className="max-h-0  overflow-hidden peer-checked:max-h-full bg-[#FFF] rounded-b-20">
          <div className="p-6">
            <div className="mt-[22px] flex  justify-between">
              <div className="flex gap-x-[10px]">
                <button className="border-1 border-[#EC6274] w-24  bg-[#FFF] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#1B1B1E]">
                  Morning
                </button>
                <button className="w-[110px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Afternoon
                </button>
                <button className="w-[81px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Dining
                </button>
              </div>
              <div className="hidden lg:block">
                <span className="flex items-center gap-x-2">
                  <IoAddOutline className="w-5 h-5 rounded-full bg-[#EC6274] text-white" />
                  <h4 className="text-[#EC6274] text-lg font-semibold">
                    Add activity
                  </h4>
                </span>
              </div>
            </div>
            <div className="mt-[26px] border-[1px] rounded-[15px] bg-[#FFF] border-[#EAEAEA] h-[294px] w-[387px]">
            <div className="relative">
             <img className="h-[140px]  w-full" src={c1} alt="" />
              <img className="absolute top-4 right-4 w-8 h-8 " src={group} alt="" />
             </div>
              <div className="p-4">
                <div className="w-[302px]">
                  <h6 className="text-[#1B1B1E] text-lg font-bold">
                    Alcudia Bay 50-minutes tour from Alcudia
                  </h6>
                  <div className="flex gap-x-6 mt-2">
                    <div className="flex items-center gap-x-2"><MdLocationPin  className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">Carrer de la Mareperla</h3></div>
                    <div className="flex items-center gap-x-2"><MdGroup   className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">2 pax</h3></div>
                  </div>
                </div>
                <h2 className="m text-black text-[25px] font-bold">USD 344</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 2 */}
<div className="relative lg:w-[848px]   rounded-[20px]  bg-[#F1F1F1] mt-6">
        <input
          type="checkbox"
          className="absolute peer opacity-0"
          name=""
          id="input2"
        />
        <label
          className="font-bold  tracking-[1px] mx-[20px] h-[72px] flex items-center text-lg text-[#1B1B1E]"
          htmlFor="input2"
        >
          Day 2
        </label>
        <h3 className="absolute top-[25px] left-[100px] text-base font-normal text-[#8E8E92]">
          04 June 2023
        </h3>
        <div className="absolute top-[31px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200">
          <MdKeyboardArrowDown className="w-6 h-6" />
        </div>
        <div className="max-h-0  overflow-hidden peer-checked:max-h-full bg-[#FFF] rounded-b-20">
          <div className="p-6">
            <div className="mt-[22px] flex  justify-between">
              <div className="flex gap-x-[10px]">
                <button className="border-1 border-[#EC6274]  w-24  bg-[#FFF] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#1B1B1E]">
                  Morning
                </button>
                <button className="w-[110px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Afternoon
                </button>
                <button className="w-[81px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Dining
                </button>
              </div>
              <div className="hidden lg:block">
                <span className="flex items-center gap-x-2">
                  <IoAddOutline className="w-5 h-5 rounded-full bg-[#EC6274] text-white" />
                  <h4 className="text-[#EC6274] text-lg font-semibold">
                    Add activity
                  </h4>
                </span>
              </div>
            </div>
            <div className="mt-[26px] border-[1px] rounded-[15px] bg-[#FFF] border-[#EAEAEA] h-[294px] w-[387px]">
            <div className="relative">
             <img className="h-[140px]  w-full" src={c1} alt="" />
              <img className="absolute top-4 right-4 w-8 h-8 " src={group} alt="" />
             </div>
              <div className="p-4">
                <div className="w-[302px]">
                  <h6 className="text-[#1B1B1E] text-lg font-bold">
                    Alcudia Bay 50-minutes tour from Alcudia
                  </h6>
                  <div className="flex gap-x-6 mt-2">
                    <div className="flex items-center gap-x-2"><MdLocationPin  className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">Carrer de la Mareperla</h3></div>
                    <div className="flex items-center gap-x-2"><MdGroup   className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">2 pax</h3></div>
                  </div>
                </div>
                <h2 className="m text-black text-[25px] font-bold">USD 344</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 3 */}
<div className="relative lg:w-[848px]    rounded-[20px]  bg-[#F1F1F1] mt-6">
        <input
          type="checkbox"
          className="absolute peer opacity-0"
          name=""
          id="input3"
        />
        <label
          className="font-bold  tracking-[1px] mx-[20px] h-[72px] flex items-center text-lg text-[#1B1B1E]"
          htmlFor="input3"
        >
          Day 3
        </label>
        <h3 className="absolute top-[25px] left-[100px] text-base font-normal text-[#8E8E92]">
          05 June 2023
        </h3>
        <div className="absolute top-[31px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200">
          <MdKeyboardArrowDown className="w-6 h-6" />
        </div>
        <div className="max-h-0  overflow-hidden peer-checked:max-h-full bg-[#FFF] rounded-b-20">
          <div className="p-6">
            <div className="mt-[22px] flex  justify-between">
              <div className="flex gap-x-[10px]">
                <button className="border-1 border-[#EC6274]  w-24  bg-[#FFF] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#1B1B1E]">
                  Morning
                </button>
                <button className="w-[110px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Afternoon
                </button>
                <button className="w-[81px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Dining
                </button>
              </div>
              <div  className="hidden lg:block">
                <span className="flex items-center gap-x-2">
                  <IoAddOutline className="w-5 h-5 rounded-full bg-[#EC6274] text-white" />
                  <h4 className="text-[#EC6274] text-lg font-semibold">
                    Add activity
                  </h4>
                </span>
              </div>
            </div>
            <div className="mt-[26px] border-[1px] rounded-[15px] bg-[#FFF] border-[#EAEAEA] h-[294px] w-[387px]">
            <div className="relative">
             <img className="h-[140px]  w-full" src={c1} alt="" />
              <img className="absolute top-4 right-4 w-8 h-8 " src={group} alt="" />
             </div>
              <div className="p-4">
                <div className="w-[302px]">
                  <h6 className="text-[#1B1B1E] text-lg font-bold">
                    Alcudia Bay 50-minutes tour from Alcudia
                  </h6>
                  <div className="flex gap-x-6 mt-2">
                    <div className="flex items-center gap-x-2"><MdLocationPin  className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">Carrer de la Mareperla</h3></div>
                    <div className="flex items-center gap-x-2"><MdGroup   className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">2 pax</h3></div>
                  </div>
                </div>
                <h2 className="m text-black text-[25px] font-bold">USD 344</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 4 */}
<div className="relative lg:w-[848px]  rounded-[20px]  bg-[#F1F1F1] mt-6">
        <input
          type="checkbox"
          className="absolute peer opacity-0"
          name=""
          id="input4"
        />
        <label
          className="font-bold  tracking-[1px] mx-[20px] h-[72px] flex items-center text-lg text-[#1B1B1E]"
          htmlFor="input4"
        >
          Day 4
        </label>
        <h3 className="absolute top-[25px] left-[100px] text-base font-normal text-[#8E8E92]">
          06 June 2023
        </h3>
        <div className="absolute top-[31px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200">
          <MdKeyboardArrowDown className="w-6 h-6" />
        </div>
        <div className="max-h-0  overflow-hidden peer-checked:max-h-full bg-[#FFF] rounded-b-20">
          <div className="p-6">
            <div className="mt-[22px] flex  justify-between">
              <div className="flex gap-x-[10px]">
                <button className="border-1 border-[#EC6274]  w-24  bg-[#FFF] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#1B1B1E]">
                  Morning
                </button>
                <button className="w-[110px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Afternoon
                </button>
                <button className="w-[81px] bg-[#F4F4F4] py-[7px] rounded-[100px] px-4 text-base font-semibold text-[#4E4E4E]">
                  Dining
                </button>
              </div>
              <div className="hidden lg:block">
                <span className="flex items-center gap-x-2">
                  <IoAddOutline className="w-5 h-5 rounded-full bg-[#EC6274] text-white" />
                  <h4 className="text-[#EC6274] text-lg font-semibold">
                    Add activity
                  </h4>
                </span>
              </div>
            </div>
            <div className="mt-[26px] border-[1px] rounded-[15px] bg-[#FFF] border-[#EAEAEA] h-[294px] w-[387px]">
            <div className="relative">
             <img className="h-[140px]  w-full" src={c1} alt="" />
              <img className="absolute top-4 right-4 w-8 h-8 " src={group} alt="" />
             </div>
              <div className="p-4">
                <div className="w-[302px]">
                  <h6 className="text-[#1B1B1E] text-lg font-bold">
                    Alcudia Bay 50-minutes tour from Alcudia
                  </h6>
                  <div className="flex gap-x-6 mt-2">
                    <div className="flex items-center gap-x-2"><MdLocationPin  className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">Carrer de la Mareperla</h3></div>
                    <div className="flex items-center gap-x-2"><MdGroup   className="w-4 h-4 text-[#8E8E92]" /><h3 className="text-[#8E8E92] text-base font-normal">2 pax</h3></div>
                  </div>
                </div>
                <h2 className="m text-black text-[25px] font-bold">USD 344</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default A;
