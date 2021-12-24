import React, {useState } from "react";
import User from "../Components/user";
import axios from "axios";

const LoginForm = () => {
  const loginurl =
    "https://identity-qa.schooglink.com/version1.0/auth/loginuser/ ";

  const profileurl =
    "https://identity-qa.schooglink.com/version1.0/auth/getprofile/ ";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [codename, setCodeName] = useState("");
  const [user, setUser] = useState({});

  const getProfile = (token, codename) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      Token: token,
      CodeName: codename,
      IpAddress: "127.0.0.1",
    };
    axios
      .post(profileurl, data, {
        headers: headers,
      })
      .then((response) => {
        const data = response.data[0];

        const { EmailId, CodeName } = data;
        setUser({ EmailId, CodeName });
      })
      .catch((error) => {});
  };

  const fetchUser = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      EmailId: email,
      Password: password,
      IpAddress: "127.0.0.1",
    };
    axios
      .post(loginurl, data, {
        headers: headers,
      })
      .then((response) => {
        const data = response.data[0];
        console.log(response.data[0]);
        setToken(data.Token);
        setCodeName(data.CodeName);
        getProfile(token, codename);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SubmitForm = (event, email, password) => {
    event.preventDefault();
    fetchUser(email, password);
  };

  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <>
          <h1>Welcome To Schooglink</h1>
          <form
            action=""
            onSubmit={(event) => SubmitForm(event, email, password)}
          >
            <div>
              <label htmlFor="email">Enter Your Email</label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Enter your Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit ">Login</button>
          </form>
        </>
      ) : (
        <User user={user}></User>
      )}
    </div>
  );
};

export default LoginForm;
