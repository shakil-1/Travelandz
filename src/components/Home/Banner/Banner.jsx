import  bannerImage  from "../../../assets/bannerImage.jpeg";
const Banner = () => {
  return (
    <div className="relative -z-50 flex justify-center items-center max-w-mxWidth mx-auto h-[810px] lg:h-[660px]  lg:rounded-20 bg-cover bg-center bg-no-repeat	" style={{backgroundImage:`url(${bannerImage})`}}>
      <div className="w-full   bg-gradient-image  h-full absolute md:rounded-20 overflow-hidden"></div>
  <div className="px-5 mt-12 z-50" >
  <div className=" lg:w-[896px] text-center ">
   <h1 className=" text-[30px] lg:text-[50px] text-[#FFF] font-extrabold">Experience Wanderlust at its Finest with AI-Powered Travel Planner</h1>
    <p className="font-normal text-lg mt-6  text-[#FFF]  ">Discover the best prices, secure your mobile tickets, and set off on a journey of a lifetime.</p>
   </div>
<div className="bg-[#FFF] w-[353px] lg:w-[1066px] h-[441px]  lg:h-[186px] rounded-20 p-5  mx-auto mt-[60px] ">
<div className="flex gap-x-[23px] ">
<h3 className="font-semibold text-base text-[#000] border-b-2 border-[#0189EB]">Business Trip</h3>
<h3 className="font-normal text-base text-[#69696E]">Vacationing</h3>
</div>
<hr />
<div className=" flex flex-wrap lg:flex  gap-x-5 md:mt-7 ">
  <div>
    <h3 className="font-medium  mt-4 md:mt-0">Destination</h3>
    <input className="outline-none border rounded-full w-[321px] lg:w-[297px] h-[47px] pl-6 mt-2" type="text" placeholder="What is your destination" name="" id="" />
  </div>
  <div >
    <h3 className="font-medium mt-4 md:mt-0">Check-in</h3>
    <input className="outline-none border rounded-full w-[150px] lg:w-[160px] h-[47px] pl-6  mt-2 "  type="text" placeholder="DD/MM/YYYY" name="" id="" />
  </div>
  <div>
    <h3 className="font-medium mt-4 md:mt-0">Check-out</h3>
    <input className="outline-none border rounded-full w-[150px] lg:w-[160px] h-[47px] pl-6  mt-2"  type="text" placeholder="DD/MM/YYYY" name="" id="" />
  </div>
  <div>
    <h3 className="font-medium mt-4 md:mt-0">Guests</h3>
    <input className="outline-none border rounded-full w-[140px] h-[47px] pl-6  mt-2"  type="text" placeholder="1" name="" id="" />
  </div>

<button  className="bg-gradient rounded-full w-[321px] lg:w-[180px] h-[47px] py-3 px-8 text-[#FFF] lg:mt-8 mt-8" >Explore Plans</button>
  </div>
</div>
  </div>

</div>

  )
}

export default Banner
