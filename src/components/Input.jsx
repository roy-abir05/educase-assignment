const Input = ({ children, className, labelName, labelText, ...props }) => {
  return (
    <div className="relative mb-6">
      <label
        htmlFor={`${labelName}`}
        className="text-[13px] font-normal leading-none absolute -top-1.5 left-3.5 bg-background pl-1 pr-2 text-[#6C25FF] text-sm bg-[#f7f8f9] select-none"
      >
        {props.required && (
          <sup className="absolute -top-1 right-0 text-sm leading-none text-[#DD4A3D]">
            *
          </sup>
        )}
        {labelText}
      </label>
      <input
        name={`${labelName}`}
        {...props}
        className={`w-full border border-[#CBCBCB] rounded-md px-[18px] pt-2.5 pb-2 placeholder:text-[#919191] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] transition-all duration-300 ${
          className ? className : ""
        }`}
      />
    </div>
  );
};

export default Input;
