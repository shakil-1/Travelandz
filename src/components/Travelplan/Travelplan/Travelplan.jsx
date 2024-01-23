import b1 from "../../../assets/b1.png";
import b2 from "../../../assets/b2.png";
import b3 from "../../../assets/b3.png";
import circle from "../../../assets/icon/tick-circle.svg";
import Facilities from "../../share/Facilities";
import { IoIosStar } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import A from "../../A";

import TravelplanNavbar from "../TravelplanNavbar/TravelplanNavbar";
import Checkout from "../Checkout/Checkout";
import { useState } from "react";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

const Travelplan = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <TravelplanNavbar />
      <hr />
      <div className="max-w-mxWidth mx-auto px-5 mt-[42px]  ">
        <div >
          <div className="lg:flex gap-x-6 ">
            <div className="lg:w-[848px]">
              <div className="flex flex-col-reverse  lg:flex-col">
                <div className="mb-10 mt-6 lg:mt-0">
                  <h1 className="text-[#1B1B1E] text[25px] mt-[14px] lg:mt-2 lg:text-3xl font-bold">
                    Hotel de Mar Gran Meliá
                  </h1>
                  <div className="  md:text-base font-normal lg:flex items-center gap-x-2 text-[#1B1B1E]">
                    <IoIosStar className="w-4 h-4 text-[#1B1B1E]" /> 4.3 •
                    <span className="border-b-1 border-[#3C3C43]">
                      (112 reviews)
                    </span>
                    •
                    <br />
                    <span className="border-b-1 border-[#3C3C43]">
                      Paseo de las Illetas, 7, Mallorca
                    </span>
                  </div>
                </div>
                <div>
                  <img className="h-[470px] rounded-none" src={b1} alt="" />
                
                </div>
              </div>
              <div>
                <h5 className="text-[25px] text-black font-bold mt-10">
                  Overview
                </h5>
                <p className="mt-6 text-[#3C3C43] text-lg font-normal">
                  Fuga omnis consequuntur quia cupiditate aut nulla. Blanditiis
                  quam veritatis. Commodi quia eum quia asperiores aliquid id.
                  Officia explicabo fugit sequi ipsa ut quo repellat. Quidem
                  magni adipisci non voluptate modi modi et earum unde. Soluta
                  consectetur eos eos ea vel mollitia consequatur qui ut. <br />{" "}
                  <br />
                  <div className="flex sm:block md:hidden items-center justify-between bg-[#FFF] h-[82px] px-5 rounded-20">
                    <h2 className="text-[#1B1B1E] text-[25px] font-bold">
                      $75
                    </h2>
                    <div>
                      <button
                        onClick={openModal}
                        className="rounded-[100px] bg-gradient text-center text-lg font-medium w-[150px] h-[47px] py-3 px-8 text-[#FFF]"
                      >
                        Checkout
                      </button>
                      <CheckoutModal isOpen={modalOpen} onClose={closeModal} />
                    </div>
                  </div>
                  Ut dolorem consequatur eligendi. Consectetur commodi ratione.
                  Commodi fuga numquam aut deleniti hic. Commodi dolor excepturi
                  et occaecati voluptas voluptatem. Minus dolorem
                  exercitationem. Fugiat quia omnis odit doloremque hic animi.
                  Dolorem vel facilis quisquam illum modi beatae. Impedit sunt
                  consectetur sed libero exercitationem exercitationem. Et et
                  sunt. Et omnis in. Aut qui optio enim beatae excepturi ipsum
                  facere non.
                </p>
              </div>
              <hr className="my-10" />
              <div>
                <h5 className="text-[25px] text-black font-bold">Facilities</h5>
                <div className="mt-6 flex flex-wrap gap-x-16 gap-y-6">
                  <Facilities icons={circle} title="24/7 Front desk" />
                  <Facilities icons={circle} title="Valet parking" />
                  <Facilities icons={circle} title="Swimming pool" />
                  <Facilities icons={circle} title="Golf par" />
                  <Facilities icons={circle} title="Airport pickup" />
                  <Facilities icons={circle} title="Spa and Gym" />
                  <Facilities icons={circle} title="Free WiFi all rooms" />
                </div>
              </div>

              <div className="mt-[68px]">
                <h4 className="text-3xl text-[#1B1B1E] font-bold">
                  Personalized Recommendations For You
                </h4>
                <p className="text-base font-normal text-black mt-4 mb-10">
                  I have added recommended experiences for you, please feel free
                  to add or remove new ones.{" "}
                </p>

                <div>
                  <A />
                </div>
              </div>
            </div>

            <div className="lg:w-[412px] ">
              <div className=" mb-[73px] flex justify-end">
                <h2 className="text-lg hidden lg:block lg:flex items-center  gap-x-4 font-semibold underline  text-[#DD727D] ">
                  <FiRefreshCw className="w-5 h-5" /> Try Another Hotel
                </h2>
              </div>
              <div className="hidden lg:block">
                <img className="h-[223px]" src={b3} alt="" />
                <img className="h-[223px] mt-6" src={b2} alt="" />
              </div>
              {/* checkout  */}
              <div className="hidden lg:block">
                <Checkout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelplan;
