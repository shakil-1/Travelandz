import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import a from "../../../assets/a.png";
import b from "../../../assets/b.png";
import c from "../../../assets/c.png";
import d from "../../../assets/d.png";
import SliderCard from "../../share/SliderCard";
const Slider = () => {
  return (
    <div className="max-w-mxWidth mx-auto px-5 ">
      <div className="grid grid-cols-12 mb-[60px] ">
        <div className=" col-span-12 lg:col-span-8 ">
          <h3 className="text-[#1B1B1E] text-[25px] lg:text-[35px] font-bold  ">
            Discover Unique Destinations with AI Trip Itinerary.
          </h3>
          <p className="text-[#3C3C43] text-lg font-normal mt-6">
            Explore our AI's handpicked selection of the top 10 unique cities
            and create lifelong vacation's memories using AI trip planner. Use
            Travelandz AI planner to experience local culture and nature in
            these breathtaking destinations.
          </p>
        </div>
        <div className="hidden lg:block lg:col-span-4  "></div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
<SwiperSlide>
  <SliderCard sliderimg={a} title1="Dubai" description="Immerse yourself in the modern city known for its impressive skyline, luxury shopping, and man-made attractions such as the iconic Burj Khalifa, the world's tallest building." plan="Plan your trip"  title2="Dubai"  />
</SwiperSlide>
<SwiperSlide>
  <SliderCard sliderimg={b} title1="Petra" title2="Petra" description="
Petra, a marvel of antiquity nestled in the rugged canyons of Jordan, reveals a timeless tale etched in rose-red rock. Carved temples and tombs beckon, narrating the ancient Nabatean city's history, while the iconic Al-Khazneh stands as a testament to Petra's enduring legacy." plan="Plan your trip"    />
</SwiperSlide>
<SwiperSlide>
  <SliderCard sliderimg={c} title1="Istanbul" title2="Istanbul" description="In the heart of Istanbul lies a tapestry of history, blending ancient wonders with modern vitality. From the grandeur of the Hagia Sophia to the bustling Grand Bazaar, each step unveils layers of a city that spans centuries, resonating with cultural richness and architectural marvels." plan="Plan your trip"    />
</SwiperSlide>
<SwiperSlide>
  <SliderCard sliderimg={d} title1="Dubai" description="Dubai, a desert oasis transformed into a global metropolis, reflects a rapid ascent marked by innovation and opulence. From pearl diving to skyscraper dominance, Dubai's history encapsulates a journey of visionary development and cultural fusion." plan="Plan your trip"  title2="Dubai"  />
</SwiperSlide>
<SwiperSlide>
  <SliderCard sliderimg={b} title1="Petra" title2="Petra" description="Petra, a marvel of antiquity nestled in the rugged canyons of Jordan, reveals a timeless tale etched in rose-red rock. Carved temples and tombs beckon, narrating the ancient Nabatean city's history, while the iconic Al-Khazneh stands as a testament to Petra's enduring legacy." plan="Plan your trip"    />
</SwiperSlide>
   
      </Swiper>
    </div>
  );
};

export default Slider;
