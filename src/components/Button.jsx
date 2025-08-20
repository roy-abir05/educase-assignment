const Button = ({ children, className, highlight }) => {

  return (
    <button
      className={`w-[335px] h-[46px] rounded-[6px] text-center font-[Rubik,sans-serif] font-medium leading-0 ${highlight?"bg-[#6C25FF] text-[#FFFFFF]":"bg-[#6C25FF4B] text-[#1D2226]"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
