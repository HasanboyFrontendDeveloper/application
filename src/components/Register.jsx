import { useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { registerUserStart } from "../slice/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHandler = (e) => {
    e.preventDefault()
    dispatch(registerUserStart())
  };

  return (
    <div className="container w-25 bg-info p-5">
      <div className="text-center">
        <form onSubmit={registerHandler}>
          <img src="./Hasanboy icon.png" alt="Icon" width={90} />
          <h3>Sing up</h3>
          <Input
            label={"Username"}
            type={"text"}
            state={name}
            setState={setName}
          />
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
          <button className="btn btn-primary w-50 mt-5" disabled={isLoading}>{isLoading ? 'loading...' : 'Sign up'}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
