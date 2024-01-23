const InputText = ({ name }) => {
    return (
      <>
      <input
        className="outline-none bg-[#FFF] text-base border border-[#E7E7E7] text-[#B5B5B5] font-normal rounded-[100px] w-full mx-auto lg:w-[457px] h-[50px] pl-6 py-[15px] mt-2"
        type="text"
        placeholder={`${name}`}
        name={name}
        id={name}
      />

     
  
      </>
    );
  };
  
  export default InputText;
  