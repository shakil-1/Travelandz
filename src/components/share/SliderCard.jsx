import { GoArrowRight } from "react-icons/go";

const SliderCard = ({sliderimg,title1,description,plan,title2}) => {
    return (
        <div>
     <div className="h-[450px] lg:h-[540px] mx-auto lg:w-[380px] rounded-20 overflow-hidden group transition-opacity duration-300 ease-in-out">
    <img className="relative rounded-20 h-full w-full" src={`${sliderimg}`} alt="" />
    <div className="absolute pb-[23.67px] z-50 px-[27.18px] bottom-0 left-0 right-0 bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <h3 className="text-3xl font-bold">{`${title1}`}</h3>
      <div className="">
        <p className="text-lg font-normal text-wrap ">
        {`${description}`}
        </p>
      </div>
      <div className="flex items-center gap-x-5">
        <h1 className="mt-[14.5px] text-lg font-medium border-b-1">{`${plan}`}</h1>
        <GoArrowRight className="w-5 h-5 mt-[14.5px]" />
      </div>
    </div>
    <h3 className='absolute bottom-[32px] z-50 left-[32px] right-0 text-3xl font-bold text-[#FFF] group-hover:opacity-0 transition-opacity duration-300 ease-in-out'>{`${title2}`}</h3>
  </div>
  <div className="-z-9 bg-gradient-to-t from-[#261010] absolute top-0 rounded-20 h-full md:h-[450px] lg:h-[540px] w-full lg:w-[380px]"></div>
        </div>
    );
};

export default SliderCard;