import "./Css/App.css";
import React, { useState } from "react";

import Login from "./Login.js";
import Layout from "./Layout/LayoutComponent.js";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Layout />
    </div>
  );
}

export default App;
