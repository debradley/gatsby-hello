import React, { Component } from "react";

import Button from "../button";
import "./styles.css";

export class ColorChooser extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: undefined };
  }

  setTemperature = temperature => {
    this.setState({ temperature });
    if (temperature === "hot") {
      this.makeItHot();
    }
    if (temperature === "cool") {
      this.makeItCool();
    }
  };

  setCssVar = (name, value) => {
    document.documentElement.style.setProperty(name, value);
  };

  makeItHot = () => {
    this.setCssVar("--primary-background-color", "#FA6800");
    this.setCssVar("--primary-text-color", "#FFCC6F");
  };

  makeItCool = () => {
    this.setCssVar("--primary-background-color", "#405380");
    this.setCssVar("--primary-text-color", "#7384B5");
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__prompt">Tell me how you like it</h1>
        <div className="app__choices">
          <Button
            disabled={this.state.temperature === "hot"}
            onClick={() => this.setTemperature("hot")}
          >
            Hot
          </Button>
          <Button
            disabled={this.state.temperature === "cool"}
            onClick={() => this.setTemperature("cool")}
          >
            Cool
          </Button>
        </div>
      </div>
    );
  }
}

export default ColorChooser;
