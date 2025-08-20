import avatar from "../assets/avatar.png";
import camera from "../assets/camera.png";

const Avatar = () => {
  return (
    <div className="relative size-[76px] flex items-center justify-center">
      <img src={avatar}
       alt="Profile" className="w-full rounded-full" />
      <button
        type="button"
        className="absolute cursor-pointer overflow-hidden bottom-1.5 -right-2 size-6 rounded-full flex items-center justify-center"
      >
        <img src={camera} alt="Update Avatar" className="w-full" />
      </button>
    </div>
  );
}

export default Avatar;