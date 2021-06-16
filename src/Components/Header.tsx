import React from "react";
import { IHeader } from "../App";

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <div className="title">
      <div className="yellow_bar"></div>
      <b>{title} </b>
    </div>
  );
};

export default Header;
