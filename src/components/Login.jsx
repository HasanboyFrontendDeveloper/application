import React, { useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <div className="container w-25 bg-info p-5">
      <div className="text-center">
        <form>
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
          <button
            className="btn btn-primary w-50 mt-5"
            type="submit"
            disabled={isLoading}
            onClick={loginHandler}
          >
            {isLoading ? 'loading...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
