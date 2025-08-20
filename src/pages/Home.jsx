import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="parent-container flex flex-col justify-end items-start">
      <div className="w-[250px] h-[120px] mb-2">
        <div className="title mb-1.5">Welcome to PopX</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>
      </div>
      <div>
        <Link to="/signup">
          <Button className="mb-2.5" type="highlight">
            Create Account
          </Button>
        </Link>
        <Link to="/login">
          <Button Link="/login">Already Registered? Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
