

const Heading = ({textTitle, textDescrip}) => {
    return (
    <div className="lg:w-[848px] mx-auto lg:text-center">
        <h3 className="text-[#1B1B1E] text-[25px] lg:text-[35px] font-bold">{`${textTitle}`}</h3>
        <p className="text-[#3C3C43] text-lg font-normal mt-6">{`${textDescrip}`}</p>
    </div>
    );
};

export default Heading;