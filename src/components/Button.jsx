const Button = ({ children, className, type, ...props }) => {

  let status = "";

  if(type==="highlight"){
    status = "bg-[#6C25FF] text-[#FFFFFF] hover:bg-[#6e25ffee] active:bg-[#6C25FFCC] cursor-pointer";
  }
  else if(type==="inactive"){
    status = "bg-[#CBCBCB] text-[#FFFFFF] cursor-not-allowed";
  }
  else{
    status = "bg-[#6C25FF4B] text-[#1D2226] hover:bg-[#6C25FF66] active:bg-[#6C25FF99] cursor-pointer";
  }

  return (
    <button
      {...props}
      className={`w-[335px] h-[46px] rounded-[6px] text-center font-[Rubik,sans-serif] font-medium leading-0 transition-all duration-300 ${status} ${className?className:""}`}
    >
      {children}
    </button>
  );
};

export default Button;
