import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [type, setType] = useState("inactive");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkType = (email, password) => {
    console.log(email, password);
    if (email && password) {
      if (email.includes("@") && email.includes(".")) {
        setType("highlight");
      } else {
        setType("inactive");
      }
    } else {
      setType("inactive");
    }
  };

  return (
    <div className="parent-container">
      <div className="mb-8">
        <div className="title mb-3">Signin to your PopX account</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>
      </div>
      <div>
        <Input
          type="email"
          labelName="email"
          labelText="Email Address"
          placeholder="Enter email address"
          required
          onInput={(e) => {
            setEmail(e.target.value);
            checkType(e.target.value, password);
          }}
          onChange={(e) => {
            setEmail(e.target.value);
            checkType(e.target.value, password);
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
            checkType(email, e.target.value);
          }}
          onChange={(e) => {
            setPassword(e.target.value);
            checkType(email, e.target.value);
          }}
        />

        <Link to="/profile">
          <Button type={type}>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
