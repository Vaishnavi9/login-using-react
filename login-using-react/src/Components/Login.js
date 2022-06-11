import React, { useEffect, useState } from "react";
import { FormDiv, Input } from "./loginStyle";
function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {});
  return (
    <form>
      <FormDiv>
        <div>
          <label>Username</label>
          <Input className="" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <Input className="" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={console.log(userName, " ", password)}>Login</button>
        </div>
      </FormDiv>
    </form>
  );
}

export default Login;
