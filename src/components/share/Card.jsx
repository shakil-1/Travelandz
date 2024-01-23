
const Card = ({images,title,description}) => {
    return (
        <>
           <div className="rounded-20 mx-auto p-6  lg:w-[412px] my-4 h-[362px] lg:h-[339px] bg-[#FFF] border-1 border-borderClr">
          <img className="mb-8 w-[42px] h-[42px] text-[#C5606A]" src={`${images}`} alt="gear icon" />
           <h3 className="mb-6 text-[#3C3C43] text-[25px] font-bold">{`${title}`}</h3> 
           <p className="text-[#3C3C43] text-md lg:text-lg font-normal">{`${description}`}</p>
        </div>
        
        </>
    );
};

export default Card;