import Avatar from "../components/Avatar";

const Profile = () => {
  return (
    <div className="parent-container relative">
      <div className="absolute top-0 left-0 w-full h-[68px] font-[Rubik,sans-serif] text-lg bg-white text-[#1D2226] flex items-center justify-start pl-[15px]">
        Account Settings
      </div>
      <div className="flex flex-col gap-y-[30px] mt-[68px]">
        <div className="flex gap-5 items-center">
          <Avatar />
          <div className="">
            <h2 className="font-medium text-[15px]">Marry Doe</h2>
            <p className="text-sm">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-left font-normal text-[13px] leading-[22px] tracking-[0px] text-[#1D2226] capitalize">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="absolute left-0 top-[300px] w-full border-t-[2px] border-dashed border-[#CBCBCB]"></div>

    </div>
  );
};

export default Profile;
