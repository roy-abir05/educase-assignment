import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const Signup = () => {
  const [type, setType] = useState("inactive");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState(true);

  const checkType = ({ name, number, email, password, company, agency }) => {
    const isValidName = name.trim().length > 0;
    const isValidPhone = number.length > 0;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length > 0;
    const isValidAgency = agency === true || agency === false;

    if (
      isValidName &&
      isValidPhone &&
      isValidEmail &&
      isValidPassword &&
      isValidAgency
    ) {
      setType("highlight");
    } else {
      setType("inactive");
    }
  };

  return (
    <div className="parent-container flex flex-col justify-between">
      <div>
        <div className="title mb-8">Create your PopX account</div>
        <div>
          <Input
            type="text"
            labelName="name"
            labelText="Full Name"
            placeholder="Enter Full Name"
            required
            onInput={(e) => {
              setName(e.target.value);
              checkType({
                name: e.target.value,
                number,
                email,
                password,
                company,
                agency,
              });
            }}
            onChange={(e) => {
              setName(e.target.value);
              checkType({
                name: e.target.value,
                number,
                email,
                password,
                company,
                agency,
              });
            }}
          />
          <Input
            type="number"
            labelName="phone"
            labelText="Phone Number"
            placeholder="Enter phone number"
            required
            onInput={(e) => {
              setNumber(e.target.value);
              checkType({
                name,
                number: e.target.value,
                email,
                password,
                company,
                agency,
              });
            }}
            onChange={(e) => {
              setNumber(e.target.value);
              checkType({
                name,
                number: e.target.value,
                email,
                password,
                company,
                agency,
              });
            }}
          />
          <Input
            type="email"
            labelName="email"
            labelText="Email Address"
            placeholder="Enter email address"
            required
            onInput={(e) => {
              setEmail(e.target.value);
              checkType({
                name,
                number,
                email: e.target.value,
                password,
                company,
                agency,
              });
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              checkType({
                name,
                number,
                email: e.target.value,
                password,
                company,
                agency,
              });
            }}
          />
          <Input
            type="password"
            labelName="password"
            labelText="Password"
            placeholder="Enter password"
            required
            onInput={(e) => {
              setPassword(e.target.value);
              checkType({
                name,
                number,
                email,
                password: e.target.value,
                company,
                agency,
              });
            }}
            onChange={(e) => {
              setPassword(e.target.value);
              checkType({
                name,
                number,
                email,
                password: e.target.value,
                company,
                agency,
              });
            }}
          />
          <Input
            type="text"
            labelName="company"
            labelText="Company Name"
            placeholder="Enter company name"
            onInput={(e) => {
              setCompany(e.target.value);
              checkType({
                name,
                number,
                email,
                password,
                company: e.target.value,
                agency,
              });
            }}
            onChange={(e) => {
              setCompany(e.target.value);
              checkType({
                name,
                number,
                email,
                password,
                company: e.target.value,
                agency,
              });
            }}
          />
          <div className="text-[#1d2226] font-[Rubik,sans-serif] text-sm">
            <div>
              <span>Are you an Agency?</span>
              <span className="relative">
                <sup className="absolute top-0 -right-2 text-sm leading-none text-[#DD4A3D]">
                  *
                </sup>
              </span>
              <div className="flex gap-4 items-center mt-2">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="choice"
                    value="yes"
                    defaultChecked
                    className={`size-[22px] transition-all duration-300 ${
                      agency
                        ? "border-[#642AF5] accent-[#6C25FF]"
                        : "border-[#919191]"
                    }`}
                    onChange={(e) => {
                      setAgency(true);
                      checkType({
                        name,
                        number,
                        email,
                        password,
                        company,
                        agency: true,
                      });
                    }}
                  />
                  Yes
                </label>

                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="choice"
                    value="no"
                    className={`size-[22px] transition-all duration-300 ${
                      agency
                        ? "border-[#919191]"
                        : "border-[#642AF5] accent-[#6C25FF]"
                    }`}
                    onChange={(e) => {
                      setAgency(false);
                      checkType({
                        name,
                        number,
                        email,
                        password,
                        company,
                        agency: false,
                      });
                    }}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/profile">
        <Button type={type}>Create Account</Button>
      </Link>
    </div>
  );
};

export default Signup;
