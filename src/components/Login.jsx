import React, { useEffect, useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthServise from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";
import icon from '../img/Hasanboy icon.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault();

    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthServise.userLogin(user);

      dispatch(signUserSuccess(response.user));
      navigate('/')
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  
  useEffect(() => {
    if (loggedIn) {
      navigate("/")
    }
  }, [loggedIn])

  return (
    <div className="w-25 bg-info p-5">
      <div className="text-center">
        <form>
          <img src={icon} alt="Icon" width={90} />
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
          <ValidationError />
          <button
            className="btn btn-primary w-50 mt-5"
            type="submit"
            disabled={isLoading}
            onClick={loginHandler}
          >
            {isLoading ? "loading..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
