import "../Css/Layout.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Assessment from "@material-ui/icons/Assessment";

import Stats from "../screens/Stats";

const setPageTitle = (name) => {
  let url = window.location.href;
  let pageName = "";

  if (name !== "") {
    pageName = name;
    console.log(name);

    document.getElementById("pageName").innerText = pageName;
  } else {
    if (url.includes("event")) {
      pageName = "Øvelser";
    }

    setTimeout(
      () => (document.getElementById("pageName").innerText = pageName),
      10
    );
    console.log(name);
  }
};

const Layout = ({ children }) => {
  setPageTitle("");

  return (
    <div className="LayoutContainer">
      <div className="LayoutHeader">
        <div className="Logo" />
        <div>
          <span id="pageName" className="PageName">
            page
          </span>
        </div>
      </div>
      <div className="LayoutBodyContainer">
        <Router>
          <div className="LayoutSideNav">
            <Link
              to="/stats"
              className="LayoutRoutingContainer"
              onClick={() => setPageTitle("Statistik")}
            >
              <Assessment className="LayoutRoutingContainerIcon" />
              <p className="LayoutRoutingContainerText">Statistik</p>
            </Link>
          </div>

          <Switch>
            <Route path="/stats" component={Stats} />
          </Switch>
        </Router>

        <div></div>
      </div>
    </div>
  );
};

export default Layout;
