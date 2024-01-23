import Heading from "../../share/Heading";
import gear from "../../../assets/icon/gear.svg";
import Card from "../../share/Card";
import calendar from "../../../assets/icon/calendar.svg";
import rating from "../../../assets/icon/rating.svg";

const Features = () => {
  return (
    <div className="max-w-mxWidth mx-auto my-[180px] px-5">
      <Heading
        textTitle="Unparalleled Features for Effortless AI Trip Planning"
        textDescrip="Travelandz is an AI trip planner that uses the tools of travel agencies, allowing it to offer the best price for hotels and activities available."
      />
      <div className="mt-[40px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card images={gear} title="Personalized Planning" description="Our AI-driven platform crafts unique travel plans tailored to your preferences, ensuring a unique experience that suits you. Share your plans with the Travelandz community to receive valuable suggestions and ideas from fellow travelers." />
        <Card images={calendar} title="Real-time Availability" description="Stay up-to-date with the latest information on hotels, attractions, and transportation. Our AI travel planning platform connects to real-time systems, allowing you to effortlessly plan and book every aspect of your unique AI vacation itinerary with confidence." />
        <Card images={rating} title="User-friendly Interface" description="Navigating our AI travel planner is a breeze, thanks to our intuitive design. We've created a seamless user experience that simplifies the planning process, allowing you to focus on creating unforgettable vacation's memories with AI trip planner." />
      </div>
    </div>
  );
};

export default Features;
