import React, { useState } from "react";
import PropTypes from "prop-types";
import "../src/Css/Login.css";

async function handleLogin(credentials) {
  if (credentials.username == "test" && credentials.password == "test") {
    return "token";
  }
}

async function loginUser(credentials) {
  var myHeaders = new Headers();
  myHeaders.append("Password", credentials.password);
  myHeaders.append("UserName", credentials.username);
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify("false");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "http://20.52.149.172:80/api/coachuser/login",
    requestOptions
  )
    .then(async (response) => response.text())
    .then(async (result) => {
      console.log("result= " + result);
      if (result === "Not authorized") {
        console.log(result);
        alert("Forkert Email eller adgangskode");
      } else {
        console.log("Im setting auth");
        const token = { token: result };
        //console.log("Token before" + JSON.stringify(token));
        return token;
      }
    })
    .catch((error) => console.log("error", error));
  return response;
  // setUserToken('fkg')
  // setIsLoading(false)
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password,
    // });
    // console.log("token" + token);
    // setToken(token);
    e.preventDefault();
    const token = await handleLogin({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="Wrapper">
      <div className="Content">
        <div className="LoginBox">
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="SubmitButton">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
