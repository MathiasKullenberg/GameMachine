import React from "react";
import "../Css/MainView.css";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  update() {}
  render() {
    return (
      <div className="MainViewContainer">
        <div className="counterContainer">
          <h2>Antal Brugere</h2>
        </div>
      </div>
    );
  }
}

export default Stats;
