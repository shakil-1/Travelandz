import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Slider from "./Slider/Slider";

function App() {
  return (
    <>
    <Navbar/>
      <div>
      <Banner />
      <Features />
      <Slider/>
      <Contact />
      </div>
    </>
  );
}

export default App;
