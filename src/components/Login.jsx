import React, { useState } from "react";
import { Input } from "../ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container w-25 bg-info p-5">
      <div className="text-center">
        <img src="./Hasanboy icon.png" alt="Icon" width={90} />
        <h3>Sing in</h3>
        <Input
          label={"Email"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />
        <button className="btn btn-primary w-50 mt-5">Sign in</button>
      </div>
    </div>
  );
};

export default Login;
