import InputText from "../../share/InputText";
import received from "../../../assets/received.svg";
import Title from "../../share/Title";
import Heading from "../../share/Heading";


const Contact = () => {
    return (
        <div className="max-w-mxWidth mx-auto my-[180px] px-5">
            <Heading textTitle="How Can We Help?" textDescrip="Travelandz is an AI trip planner that uses the tools of travel agencies, allowing it to offer the best price for hotels and activities available." />
            <div>
                <form className="bg-[#FFF] rounded-20 w-full lg:w-[521px] h-[582px] mx-auto mt-[60px] p-[32px]">
                    <div>
                    <Title title="Your name"/>
                    <InputText name="Your name" />
                    </div>
                    <div className="mt-4">
                    <Title title="Phone number"/>
                     <InputText name="Your phone number" />
                    </div>
                    <div className="mt-4">
                    <Title title="Email address"/>
                    <InputText name="Your email address" />
                    </div>
                    <div className="mt-4">
                    <Title title="Message"/>
                    <textarea className="outline-none bg-[#FFF] text-base border border-[#E7E7E7] text-[#B5B5B5] font-normal rounded-20 w-full lg:w-[457px] h-[120px] pl-6 py-[15px] mt-2" name="" placeholder="How can we help?" id="" cols="30" rows="10"></textarea>
                     <button className="flex justify-center items-center gap-x-[10px] w-full lg:w-[457px] text-[#FFF] py-3 px-8 rounded-[100px] bg-gradient text-lg font-semibold mt-10">Send Inquiry <span><img src={received} alt="received" /></span></button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;