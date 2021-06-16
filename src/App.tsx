import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import CovidBox from "./Components/CovidBox";

export interface IHeader {
  title: string;
}

function App() {
  return (
    <div className="App">
      <Header title="SIA Cares" />
      <Slider />
      <CovidBox />
    </div>
  );
}

export default App;
