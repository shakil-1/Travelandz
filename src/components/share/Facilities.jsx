

const Facilities = ({icons,title}) => {
    return (
        <>
             <li className="flex items-center gap-x-4 text-[#3C3C43] text-base font-normal "><img className="w-5 h-5" src={`${icons}`} alt="" />{`${title}`}</li>
        </>
    );
};

export default Facilities;